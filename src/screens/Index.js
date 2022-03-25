import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Login from "./login";
import * as firebase from "firebase";
import { fireBaseApp } from "../utils/FireBase";
import Loading from "../components/Loading";
import { Button } from "react-native-elements";


export default function Index(props) {
  const { navigation } = props;
  console.log(navigation.navigate("index"));
  const [login, setLogin] = useState(null); //Guarfar el estado de la sesíon
  useEffect(() => {
    //Consultar el estado del usuario
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text={"Cargando"} />;
  if (login) {
    return (
      <View>
        <Text>Mi Index</Text>
        <Button
          title="Ir a Smart"
          onPress={() => navigation.navigate("smart")}
        ></Button>

        <Button
          title="Ir a Profile"
          onPress={() => navigation.navigate("profile")}
        ></Button>

        {/* <TouchableOpacity  style = {{backgroundColor : 'white', borderColor : 'black', borderWidth : 1}}>
          <Text style ={{fontSize : 15}}>Log out</Text>
        </TouchableOpacity> */}
        
      </View>
    );
  } else {
    return <Login></Login>;
  }
}
