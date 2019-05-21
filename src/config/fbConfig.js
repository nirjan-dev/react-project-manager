import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATxe5WGn1YsAAgoL1Sx8ackFllSI_X4GQ",
  authDomain: "net-ninja-marioplan-a26eb.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-a26eb.firebaseio.com",
  projectId: "net-ninja-marioplan-a26eb",
  storageBucket: "net-ninja-marioplan-a26eb.appspot.com",
  messagingSenderId: "578391484128",
  appId: "1:578391484128:web:c699fa228a2ecdf8"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
