import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAsxgh9iFTqDxZNbLq39GPskNB3XZk0oVs",
  authDomain: "medieval-age-app.firebaseapp.com",
  databaseURL: "https://medieval-age-app-default-rtdb.firebaseio.com",
  projectId: "medieval-age-app",
  storageBucket: "medieval-age-app.appspot.com",
  messagingSenderId: "610141156101",
  appId: "1:610141156101:web:e831e992d884bca661fd6c"
};
  // Initialize Firebase
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
