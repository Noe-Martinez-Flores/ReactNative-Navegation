import React from "react";
import { Text, View, Button } from "react-native";
export default function Profile(props){
    const {navigation} = props;
    return (
        <View>
            <Text>Mi Profile</Text>
            <Button title="Ir a Home" onPress={
                () => navigation.navigate("index")
            }></Button>
        </View>
    )
}