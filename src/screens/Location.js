import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import MapView,{Marker, Circle} from 'react-native-maps'

export default function Location() {
//18.964536183005187, -99.23778922891084
    const [region, setRegion] = useState({
        latitude : 18.964536183005187,
        longitude : -99.23778922891084,
        latitudeDelta : 0.0522,
        longitudeDelta : 0.0521,
    })

    const [market, setMarket] = useState({
        latitude : 18.964536183005187,
        longitude : -99.23778922891084,
    })

  return (
    <View style = {styles.container}>
        <MapView style = {styles.map} region = {region} onPress = {(e) => (setMarket(e.nativeEvent.coordinate), setRegion(e.nativeEvent.coordinate))} onRegionChangeComplete = {(r)=>{console.log(r)}} >
            <Marker key={1}  coordinate = {market} title = {'Hogar'} description = {'Casa Martínez'} > 
                {/* <Image source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png'}}></Image> */}
            </Marker>
            {/* <Circle radius={1000} center = {{latitude : 18.964536183005187,
        longitude : -99.23778922891084}} strokeWidth = {3} strokeColor = {'red'} fillColor = {"rba(255,0,0,0.2)"}>
            </Circle> */}
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        alignItems : 'center',
        justifyContent : 'center'
    },
    map : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height
    },
})