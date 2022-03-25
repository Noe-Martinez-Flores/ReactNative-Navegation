import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Button } from 'react-native-elements'
import * as firebase from 'firebase'

export default function ChangeDisplayNameForm(props) {

    const {displayName , toastRef, setShowModal, setReloadUserInfo} = props;

    const [newDisplayName, setNewDisplayName] = useState(null);
    const [error, setError] = useState(null);
    const [isButtonLoading, setIsButtonLoading] = useState(false);


    const onSubmit = () => {
        setError(null)
       if(!newDisplayName){
           setError("El campo Biene Vacio")
       }else if (displayName === newDisplayName){
           setError("Los nombres no pueden ser Iguales")
       }else{
           setIsButtonLoading(true);
          const update  = {
              displayName : newDisplayName
          }
          firebase.auth().currentUser.updateProfile(update)
          .then(()=>{
              setIsButtonLoading(false);
              setReloadUserInfo(true);
               setShowModal(false);
          })
          .catch((error)=>{
              setIsButtonLoading(false);
              setError('Error al Actualizar el nombre')
            });
       }
    }

  return (
    <View style = {styles.view}>
        <Input placeholder='Nombre y Apellidos' containerStyle={styles.input} rightIcon = {{type : "material-community", name : "account-circle-outline", color : "#c2c2c2"}} 
            onChange = {(event) => setNewDisplayName(event.nativeEvent.text)}
            errorMessage = {error}
            defaultValue = {displayName || "" }
        />
        <Button 
        title='Cambiar Nombre' 
        titleStyle={{fontWeight : 'bold'}} 
        buttonStyle = {{borderRadius : 15, backgroundColor : "#fcb823"}} 
        containerStyle={styles.btn} 
        onPress={
            ()=>onSubmit()
            } 
        loading = {isButtonLoading}
        >

        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    view : {
        alignItems : 'center',
        paddingTop : 10,
        paddingBottom : 10
    },
    input : {
        marginBottom : 10
    },
    btn : {
        marginTop : 10,
        width : "95%"
    },
})