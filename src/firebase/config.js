import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnLHDjHClh0u13S7jQVMeU4S7sTGXKjTE",
    authDomain: "cooking-site-b77e4.firebaseapp.com",
    projectId: "cooking-site-b77e4",
    storageBucket: "cooking-site-b77e4.appspot.com",
    messagingSenderId: "1045911652316",
    appId: "1:1045911652316:web:006f839e99276b9cc67119"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }