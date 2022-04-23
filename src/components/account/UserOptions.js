import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { map } from 'lodash';
import Modal from '../Modal';
import ChangeDisplayNameForm from './ChangeDisplayNameForm';
import ChangeDisplayEmail from './ChangeDisplayEmail';
import ChangeDisplayPassword from './ChangeDisplayPassword';
import { useNavigation } from '@react-navigation/native';


export default function UserOptions(props) {

  const navigation = useNavigation();

  const {userInfo, toastRef, setReloadUserInfo} = props;

  const [isVisible, setIsVisible] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  

  const selectComponent = (key) => {
    switch (key) {
      case "displayName":
        setRenderComponent(<ChangeDisplayNameForm displayName = {userInfo.displayName} setShowModal = {isVisible} toastRef = {toastRef} setReloadUserInfo = {setReloadUserInfo}></ChangeDisplayNameForm>);
        setIsVisible(true);
        break;

      case "email":
        setRenderComponent(<ChangeDisplayEmail></ChangeDisplayEmail>);
        setIsVisible(true);

        break;

      case "password":
        setRenderComponent(<ChangeDisplayPassword></ChangeDisplayPassword>);
        setIsVisible(true);

        break;

        case "location":
          navigation.navigate('location')
  
          break;
      default:
        break;
    }
  }

  const menuOptions = generateOptions(selectComponent);
  console.log(menuOptions)

  return (
    <View>
    {map(menuOptions,(menu,index)=>(
      <ListItem
        key={index}
        title={menu.title}
        leftIcon = {{
          type: menu.iconType,
          name : menu.iconNameL,
          color : menu.iconColor
        }}
        rightIcon = {{
          type: menu.iconType,
          name : menu.iconNameR,
          color : menu.iconColor
        }}
        containerStyle={styles.menuItem}
        onPress= {menu.onPress}
      />
    ))}
      {renderComponent && (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible}>{renderComponent}</Modal>
      )}
    
    

    </View>
  )
}

function generateOptions(selectComponent) {
  return [
    {
      title: "Cambiar Nombre Y Apellidos",
      iconType: "material-cpmmunity",
      iconNameL: "account-circle",
      iconColor: "#ccc",
      iconNameR : 'chevron-right',
      onPress: ()=>selectComponent("displayName"),
    },
    {
      title: "Cmabiat Correo Electronico",
      iconType: "material-cpmmunity",
      iconNameL: "alternate-email",
      iconColor: "#ccc",
      iconNameR : 'chevron-right',
      onPress: ()=>selectComponent("email"),
      
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameL: "lock",
      iconColor: "#ccc",
      iconNameR : 'chevron-right',
      onPress: ()=>selectComponent("password"),
    },
    {
      title: "Ubicación",
      iconType: "material-community",
      iconNameL: "google-maps",
      iconColor: "#ccc",
      iconNameR : 'chevron-right',
      onPress: ()=>selectComponent("location"),
    },
  ]
}

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    marginHorizontal: 15,
    borderRadius: 20,

  },
})