// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6hotbB5LZ1220s1g6mKdzHhC1PuaXqb8",
  authDomain: "reactnavigation-98df1.firebaseapp.com",
  projectId: "reactnavigation-98df1",
  storageBucket: "reactnavigation-98df1.appspot.com",
  messagingSenderId: "322135134892",
  appId: "1:322135134892:web:06df01c2da8e2db7638509"
};

// Initialize Firebase
export const fireBaseApp = firebase.initializeApp(firebaseConfig);