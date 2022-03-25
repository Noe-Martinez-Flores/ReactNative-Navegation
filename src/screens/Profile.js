import React, { useEffect, useState, useRef} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import UserInfo from "../components/account/UserInfo";
import UserOptions from "../components/account/UserOptions";
import Toast from "react-native-easy-toast";
import Loading from '../components/Loading'



export default function Profile(props) {
    const { navigation } = props;
    const toastRef = useRef();

    const [userInfo, setUserInfo] = useState(null);

    const [loding, setLoding] = useState(false);
    const [loadingText, setLoadingText] = useState(null);

    const [reloadUserInfo, setReloadUserInfo] = useState(false);

    useEffect(() => {
        (async () => {
            const user = await firebase.auth().currentUser;
            setUserInfo(user);
            // console.log(userInfo);
        })();
        setReloadUserInfo(false);
    }, [reloadUserInfo])


    return (
        <View style={styles.userInfo}>
            {userInfo && (<UserInfo usertInformation={userInfo} toastRef = {toastRef} setLoading = {setLoding} setLoadingText = {setLoadingText}/>)}
            <UserOptions userInfo = {userInfo} toastRef = {toastRef} setReloadUserInfo = {setReloadUserInfo}/>
            <Button
                onPress={() => {
                    firebase.auth().signOut();
                    // navigation.navigate('index');
                }}
                title={'Log-Out'}
                // buttonStyle={styles.btnStyleSesion}
                buttonStyle={{ backgroundColor: '#0BD57B', marginTop: 10, marginHorizontal: 15, borderRadius: 10, marginTop: 30 }}

                containerStyle={{}}
                titleStyle={styles.btnTitle}
            />
            <Toast ref={toastRef} position = "center" opacity = {0.9}/>
            <Loading isVisible = {loding} text = {loadingText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfo: {
        minHeight: "100%",
        backgroundColor: "#f2f2f2",
    },
    btnStyleSesion: {
        marginTop: 30,
        borderRadius: 1,
        backgroundColor: "#fcb823",
        borderTopWidth: 1,
        borderTopColor: "#e3e3e3",
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3",
        paddingTop: 10,
        paddingBottom: 10
    },
    btnTitle: {
        color: "#fff"
    },
})