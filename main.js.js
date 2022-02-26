
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDCxq8ldjptxrVUOJdec2Nr03495CAhuDc",
    authDomain: "lets-chat-webapp-bcbf8.firebaseapp.com",
    databaseURL: "https://lets-chat-webapp-bcbf8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-webapp-bcbf8",
    storageBucket: "lets-chat-webapp-bcbf8.appspot.com",
    messagingSenderId: "175609804745",
    appId: "1:175609804745:web:a58e8375e9fb1730d59a18",
    measurementId: "G-EPVQVVJY24"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
  }