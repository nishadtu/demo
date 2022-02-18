import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyD-_NBtGsUdVy6GeXnVLpyML8iyLPU38a0",
    authDomain: "fir-9c9a2.firebaseapp.com",
    projectId: "fir-9c9a2",
    storageBucket: "fir-9c9a2.appspot.com",
    messagingSenderId: "715790904537",
    appId: "1:715790904537:web:caa22594d9c087161e62c8"
  };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;