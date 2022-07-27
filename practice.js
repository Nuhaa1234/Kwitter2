
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDhaaqeXziqqWwmpGLpF9aU2Mn7rMisHE0",
    authDomain: "kwitter-61c62.firebaseapp.com",
    databaseURL: "https://kwitter-61c62-default-rtdb.firebaseio.com",
    projectId: "kwitter-61c62",
    storageBucket: "kwitter-61c62.appspot.com",
    messagingSenderId: "428338755099",
    appId: "1:428338755099:web:28fbbea6d2b585c2142abe",
    measurementId: "G-E3LESRERNS"
  };

  firebase.initializeApp(firebaseConfig);
  
function addUser()
{
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}