import { StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import { Input, Icon, Button } from "react-native-elements";
import {isEmpty} from 'lodash';
import { validateEmail } from "../../utils/Validation";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";

const FormLogin = ({toast}) => {

  const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValuesForLogin());
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password) ) {
            toast.current.show('All fields are needed')
        } else if(!validateEmail(formData.email)){
            toast.current.show('Email´s wrong!')
        }else {

          setLoading(true)

            firebase
            .auth()
            .signInWithEmailAndPassword(formData.email,formData.password)
            .then(response => {
              setLoading(false);
                console.log(response);
                navigation.navigate('index');
            })
            .catch(error => {
              toast.current.show('Email or Password Wrong!');
              setLoading(false);
            });
      }
    }

    const dataCathForLogin = (type,event) => {
      setFormData({...formData,[type] : event})
    }

    
  
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="E-mail"
        style={styles.inputForm}
        rightIcon={<Icon type="material-community" name="at" color={"#c1c1c1"} />}
        onChange = {event => dataCathForLogin('email', event.nativeEvent.text)}
      />
      <Input
        placeholder="Password"
        color = {'black'}
        //style={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        password={true}
        rightIcon={<Icon type="material-community" name={showPassword ? "eye-off" : "eye"} color = {showPassword ? "#040404": "#c1c1c1"}
        onPress={()=> setShowPassword(!showPassword)} />}
        onChange = {event => dataCathForLogin('password', event.nativeEvent.text)}

      />
      <Button buttonStyle={styles.bottom} containerStyle={styles.containerButtom} title = {"Log-In"} onPress = {()=> onSubmit()}/>
      <Loading isVisible = {loading} text = {'Log-In Account'}></Loading>
    </View>
  );
};

export default FormLogin;

function defaultFormValuesForLogin () {
  return {
    email : '',
    password : '',
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    marginTop: 20,
    width: "100%",
  },
  bottom: {
    backgroundColor : "#fcb823",
    borderRadius : 10,
  },
  containerButtom : {
      
      margin : 20,
      width : "95%"
  }
});
