var firebaseConfig = {
  apiKey: "AIzaSyCqKO38iZBBlBGrCGAqGMkX2QTu8i-Hw6Y",
  authDomain: "kwitter-by-ansuman.firebaseapp.com",
  projectId: "kwitter-by-ansuman",
  storageBucket: "kwitter-by-ansuman.appspot.com",
  messagingSenderId: "262893859174",
  appId: "1:262893859174:web:0394a9007ddba9f40958a7"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var username=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome "+username+"!";

  function addroom(){
    room_name=document.getElementById("roomname_input").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
    });
    localStorage.setItem("roomname",room_name);
    window.location="room_page.html";
  
  }
