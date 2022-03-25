import React from "react";
import { Text, View, Button } from "react-native";
export default function Smart(props){
    const {navigation} = props;
    return (
        <View>
            <Text>Mi Smart</Text>
            <Button title="training" onPress={()=> navigation.navigate("training")}></Button>
        </View>
    )
}