import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';
import * as firebase from 'firebase';
import * as permissions from 'expo-permissions';
import * as imagePicker from 'expo-image-picker'

export default function UserInfo(props) {
    
    const {usertInformation:{uid, photoURL, displayName, email}, toastRef, setLoading , setLoadingText} = props;
    console.log(photoURL)


    const changeAvatar = async () => {
        const resultPermissions = await permissions.askAsync(permissions.CAMERA);
        const resultPermissionCamera = resultPermissions.permissions.camera.status;
        console.log(resultPermissionCamera)

        if (resultPermissionCamera == "denied") {
            toastRef.current.show("It's needed give permissions to access the camera");
            
        } else {
            const result = await imagePicker.launchImageLibraryAsync({
                allowsEditing : true,
                aspect : [4,3]
            })
            //console.log(result)

            if (result.cancelled) {
                toastRef.current.show("you  have closed the galery");
            } else {
               
                upLoadImage(result.uri)
                .then(()=>{

                    toastRef.current.show("image Uploaded")
                    updatePhotoURL();
                })
                .catch((error)=>{
                    toastRef.current.show(error)
                    console.log('error catch image');
                })
            }
        }
    }

    const upLoadImage = async (uri) => {
        setLoading(true);
        setLoadingText('Loading Profile Picture!')
        //console.log(uri);
        const response = await fetch(uri);
        // console.log(JSON.stringify(response))

        const blob = await response.blob();
        console.log(JSON.stringify(blob))

        const ref = firebase.storage().ref().child(`avatar/${uid}`)
        return ref.put(blob); 
    }

    const updatePhotoURL = () => {
        setLoadingText('Updating Profile Picture');
        firebase.storage().ref(`avatar/${uid}`).getDownloadURL()
        .then(async(response)=>{console.log(response);
            const update = {
                photoURL : response
            }
            await firebase.auth().currentUser.updateProfile(update);
            setLoading(false);
        })
        .catch((error)=>{
            toastRef.current.show('error during the update picture');
            setLoading(false);
        })
    } 

  return (
    <View style = {styles.viewUserInfor}>
      <Avatar
          rounded 
          size={'large'}
          showEditButton
          onEditPress={changeAvatar}
          containerStyle = {styles.userAvatar}
          source={
              photoURL ? {uri : photoURL} :
              require('../../../assets/avatar-default.jpg')}
      />
      <View>
          <Text style = {styles.userName}>{displayName ?  displayName : "UserDefault"}</Text>
          <Text style = {styles.userEmail}>{email ?  email : "guess"}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    viewUserInfor : {
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        backgroundColor : "#f2f2f2",
        paddingTop : 30,
        paddingBottom : 30
    },
    userAvatar : {
        marginRight : 20
    },
    userName : {
        fontWeight : 'bold',
        paddingBottom : 5
    },
    userEmail : {

    },
})