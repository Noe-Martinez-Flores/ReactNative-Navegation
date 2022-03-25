import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import * as firebase from "firebase";
import { fireBaseApp } from "../utils/FireBase";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import FormLogin from "../components/account/FormLogin";
import Toast from "react-native-easy-toast";

export default function Login({ navigation }) {
  // const [login, setLogin] = useState(null); //Guarfar el estado de la sesíon
  //   useEffect (()=>{ //Consultar el estado del usuario
  //     firebase.auth().onAuthStateChanged((user) => {
  //       !user ? setLogin(false) : setLogin (true)
  //     });
  //   },[])

  const toastRef = useRef();

  return (
    <ScrollView>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: "https://m.media-amazon.com/images/I/71-ta4V2UIL._SX522_.jpg",
        }}
      />
      {/* <Image style = {styles.logo} resizeMode = 'contain' source={require('../../assets/logoSkrillex.jpg')}/>
        <Text>Hola</Text> */}
      <View style={styles.viewContainer}>
        <FormLogin toast = {toastRef}/>
        <CrearCuenta />
        <Text>Registrate</Text>
      </View>
      <Divider style={styles.divider} />
      <Text>Redes Sociales</Text>
      <Toast ref={toastRef} opacity = {0.9} position = {'center'}/>
    </ScrollView>
  );
}

function CrearCuenta() {
  const newNavigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tines cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => newNavigation.navigate('register')}
      >
        {" "}
        Registrate Aqui!
      </Text>{" "}
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 300,
    alignSelf: "center",
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  divider: {
    backgroundColor: "#fcb823",
    margin: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#fcb823",
    fontWeight: "bold",
  },
});
