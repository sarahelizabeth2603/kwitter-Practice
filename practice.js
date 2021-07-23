var firebaseConfig = {
    apiKey: "AIzaSyDm7eFI4hGt2PX2H68qWR_MnciVUM20Pfw",
    authDomain: "kwitter-practice-b1c28.firebaseapp.com",
    databaseURL: "https://kwitter-practice-b1c28-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-b1c28",
    storageBucket: "kwitter-practice-b1c28.appspot.com",
    messagingSenderId: "868831303421",
    appId: "1:868831303421:web:7875b1b9f9daa18b595094",
    measurementId: "G-ZFGTN6GKCM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addUser"
    });
}