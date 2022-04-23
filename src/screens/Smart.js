import React, {useEffect, useState, useRef} from "react";
import { Text, View, Button,StyleSheet, ImageBackground, Image} from "react-native";
import Carousel from 'react-native-snap-carousel'
import { Icon, Rating } from "react-native-elements";
import Modal from "../components/Modal";
import Video from "../components/Video";

export default function Smart(props){

    const [data, setData] = useState([])

    useEffect(() => {
      getExcercise()
      console.log('Arreglo Obtenido '+data)
    }, [])

    const carouselRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalIsOpening, setModalIsOpening] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null);

    
    

    const getExcercise = async() => {
        try {
            const response = await fetch('http://192.168.62.185/smart/ejercicio', {
                method : 'GET', 
                headers : {'Content-Type' : 'application/json'}
            })
            

            const json = await response.json();
            setData(json)
            console.log(json)
            
        } catch (e) {
            console.log('error mostrado -> '+e)
        }
    }


    const {navigation} = props;

    const getRating = (rating) => {
        console.log('The rating is -> ' + rating)
    }

    const playVideo = (id) => {
        setModalIsOpening(true);
        setRenderComponent(<Video id = {id}/>)
    }

    const renderItem = ({item, index}) => {
        return (
            <View style = {style.card} key = {index}>
                <Image style = {style.img} source = {{uri : item.imagen}}/>
                <Icon  type="material-community" name="youtube" color={"red"} size = {50} style = {{marginTop : 5}} onPress = {()=>(playVideo(item.video), setModalIsOpening(true))}/>
                <Text style = {style.exercise}>{item.ejercicio}</Text>
                <Text style = {style.description}>{item.descripcion}</Text>
                <Rating
                    fractions={1}
                    startingValue = {parseFloat(item.puntuacion)}
                    style = {{marginTop : 10}} 
                    onFinishRating = {getRating}
                    showRating
                />

            </View>
        )
    }


    return (
        <View style = {style.container}>
            {/* <Text>Mi Smart</Text>
            <Button title="training" onPress={()=> navigation.navigate("training")}></Button> */}
            {/* {map(data,(element,index)=>{
                <Text key={index}>{element.ejercicio}</Text>
            })} */}
            
            <ImageBackground style = {style.imgBackground} source = {require ('../../assets/creedii.jpg')} resizeMode = "cover">
                {/* {
                data.map((item, index)=>{
                    return(
                        <View key={index}>
                        <Text style = {{color : 'white'}}>{item.ejercicio}</Text>
                    </View>
                    )
                    
                }) 
            } */}

            <Carousel 
                layout = 'default'
                ref = {carouselRef}
                data = {data}
                sliderWidth = {400}
                itemWidth = {400}
                onSnapToItem = {(index) => setActiveIndex({activeIndex : index})}
                renderItem = {renderItem}
                
                
            />
            </ImageBackground>
            {renderComponent && (
                <Modal isVisible = {modalIsOpening} setIsVisible = {setModalIsOpening}>
                    {renderComponent}
                </Modal> 
            )}
          
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1
    },
    imgBackground : {
        flex : 1,
        width : "100%",
        height : "100%",
        alignItems : "center",
        justifyContent : "center"
    },
    card : {
        backgroundColor : "#fff",
        borderRadius : 10,
        height : "75%",
        padding : 40,
        marginTop : 40,
        marginHorizontal : 25,
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 1.5,
        borderColor : "cyan",
        opacity : 10
    },
    img : {
        height : "65%",
        width : "95%",
        borderRadius : 5
    },
    exercise : {
        fontSize : 25,
        fontWeight : "bold",
        marginTop : 5
    },
    description : {
        fontSize : 16,
        marginTop : 5
    },

})