import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// data needed

// config nedded here
 
const config = {
    apiKey: "AIzaSyCl7PsMkxNM-V3WYybUkmzWucXOH-R9_4A",
    authDomain: "netflix-portfolio-6d07f.firebaseapp.com",
    projectId: "netflix-portfolio-6d07f",
    storageBucket: "netflix-portfolio-6d07f.appspot.com",
    messagingSenderId: "641412929143",
    appId: "1:641412929143:web:6fbd9106a67353c4aed872"

};

const firebase = Firebase.initializeApp(config);

// 

export {firebase};