import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLLrUlOkvZ_qXh0AGNpNVoUxa5RUNe46o",
    authDomain: "miami-blockchain-wekk.firebaseapp.com",
    projectId: "miami-blockchain-wekk",
    storageBucket: "miami-blockchain-wekk.appspot.com",
    messagingSenderId: "1087236476679",
    appId: "1:1087236476679:web:271644d79c59c2b03e7fa2",
    measurementId: "G-K7F6DRCRJ2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};