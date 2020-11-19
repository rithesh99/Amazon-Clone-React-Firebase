import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNnt5eOtcuNTw4mwHTRO4s1Ahlbvb6t_A",
  authDomain: "clone-react-81ec2.firebaseapp.com",
  databaseURL: "https://clone-react-81ec2.firebaseio.com",
  projectId: "clone-react-81ec2",
  storageBucket: "clone-react-81ec2.appspot.com",
  messagingSenderId: "258326269078",
  appId: "1:258326269078:web:940b17ca9695abc2c886b7",
  measurementId: "G-XRRLBW71LP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };