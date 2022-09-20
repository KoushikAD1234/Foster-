import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCN79eA9KcYH6OfT3dO7QIGhThD9hc5SJs",
    authDomain: "fastor-3d911.firebaseapp.com",
    projectId: "fastor-3d911",
    storageBucket: "fastor-3d911.appspot.com",
    messagingSenderId: "341309957070",
    appId: "1:341309957070:web:a158659b759badcbd0019f",
    measurementId: "G-PLYXY1FG3D"
  };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
