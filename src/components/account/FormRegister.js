import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React , {useState}from "react";
import { Icon, Input, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import {isEmpty, size} from 'lodash'
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import Loading from '../Loading'


const FormRegister = ({toast}) => {

  const navigation = useNavigation();

const [showPass, setShowPass] = useState(false);
const [showPassRepeat, setShowPassRepeat] = useState(false);
const [formData, setFormData] = useState(defaultFormValues());
const [isVisible, setIsVisible] = useState(false);


const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)) {
      //console.log("All fields are Necessary")
      toast.current.show("All fields are Necessary")
    }else if (!validateEmail(formData.email)) {
      //console.log('email is wrong')
      toast.current.show('email is wrong')
    } else if (size(formData.password)<6){
     // console.log('it must be 6 char')
      toast.current.show('it must be 6 chars')
    } else if (formData.password !== formData.repeatPassword){
      toast.current.show('the password needed to be the same')
      //console.log('the password needed to be the same')
    }
    else {
      //toast.current.show('Success!')
      //console.log('All field are Success')
      setIsVisible(true);
      firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email,formData.password)
      .then(response => {
        setIsVisible(false);
        // console.log('REPUESTA*****************************************+')
        // console.log(response);
        //toast.current.show('Success!');
        navigation.navigate('smart');
      })
      .catch(error => {
        setIsVisible(false);
        //console.log(error);
        toast.current.show('Correo ya Registrado');
      })
    }
}

const dataCath = (event, type) => {
    //console.log(type);
    //console.log(event);
    setFormData({...formData,[type]:event})
   
}

  return (
    <View style={styles.formcontainer}>
      <Input
      onChange={(event)=>dataCath(event.nativeEvent.text,"email")}
        placeholder="E-mail"
        keyboardType="email-address"
        containerStyle={styles.inputForm}
        rightIcon={
        <Icon 
        type="material-community" 
        name="at"
        color={"gray"}
        iconStyle = {styles.icon}
        ></Icon>
        }
      />
      <Input
        onChange={(event)=>dataCath(event.nativeEvent.text,'password')}
        placeholder="Password"
        password={true}
        secureTextEntry={showPass ? false : true}
        containerStyle={styles.inputForm}
        rightIcon={
        <Icon 
        type="material-community" 
        name={showPass ? "eye-off" : "eye"}
        color={showPass ? "#040404": "#c1c1c1"}
        //iconStyle = {styles.icon}
        onPress = {()=> setShowPass(!showPass)}
        ></Icon>
        }
      />
      <Input
      onChange={(event)=>dataCath(event.nativeEvent.text,'repeatPassword')}
        placeholder="Confirm Password"
        password={true}
        secureTextEntry={showPassRepeat ? false : true}
        containerStyle={styles.inputForm}
        rightIcon={
        <Icon 
        type="material-community" 
        name={showPassRepeat ? "eye-off" : "eye"}
        color={showPassRepeat ? "#040404": "#c1c1c1"}
        //iconStyle = {styles.icon}
        onPress = {()=> setShowPassRepeat(!showPassRepeat)}
        ></Icon>
        }
      />

      {/* <Button
        title="Reigstrar"
        containerStyle={styles.containerBtnRegister}
        buttonStyle={styles.btnRegister}
      ></Button> */}

      <TouchableOpacity
        style={{
          backgroundColor: "#F1B401",
          borderRadius: 10,
          height: 40,
          marginTop: 15,
        }}
        onPress = {()=> onSubmit()}
      >
        <Text
          style={{
            alignSelf : "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 20,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <Loading isVisible = {isVisible} text = {'Creando Cuenta ...'}/>
    </View>
  );
};

export default FormRegister;

function defaultFormValues  ()  {
    return {
        email : "",
        password : "",
        repeatPassword : ""
    }
}
 
const styles = StyleSheet.create({
  formcontainer: {
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  containerBtnRegister: {
    marginTop: 20,
    width: "95%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  btnRegister: {
    backgroundColor: "#fcb823",
  },
  icon :  {
      color : "#c1c1c1"
  },
});
