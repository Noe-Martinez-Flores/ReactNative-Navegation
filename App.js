
import  'react-native-gesture-handler';
import Navigation from './src/navigations/Navigation';
import { fireBaseApp } from './src/utils/FireBase'
// import * as firebase from 'firebase';
// import { useEffect } from 'react';

export default function App() {
  console.disableYellowBox=true;

  // useEffect (()=>{
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log(user)
  //   });
  // },[])


  return (
    <Navigation/>
  );
}

