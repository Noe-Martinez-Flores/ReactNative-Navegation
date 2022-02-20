import React from "react";
import { Text, View, Button } from "react-native";
export default function Index(props){
    //console.log(props)
    const {navigation} = props;
    return (
        <View>
            <Text>Mi Index</Text>
            <Button title="Ir a Smart" onPress={() => navigation.navigate("smart")}></Button>
            
            <Button title="Ir a Profile" onPress={() => navigation.navigate("profile")}></Button>
        </View>
    )
}