import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, {useRef} from "react";
import { Icon, Input, Button } from "react-native-elements";
import FormRegister from "../components/account/FormRegister";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import Toast from "react-native-easy-toast";

export default function Register() {
  const toastRef = useRef();
  //
  return (
    <KeyboardAwareScrollView>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: "https://m.media-amazon.com/images/I/71-ta4V2UIL._SX522_.jpg",
        }}
      />
      <View style = {styles.viewForm}>
        <Text style = {[styles.viewForm,{fontWeight : "bold", textAlign : "center", marginTop : 15, fontSize : 30}]}>Register</Text>
        <FormRegister toast = {toastRef}/>
      </View>
      <Toast ref={toastRef} position = {'center'} opacity = {0.9}/>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  formView: {
    marginTop: 30,
  },
  logo: {
    height: 200,
    width: 300,
    alignSelf: "center",
  },
  viewForm: {
    marginHorizontal : 40,
    justifyContent : "center",
    
  },
  x : {}
});
