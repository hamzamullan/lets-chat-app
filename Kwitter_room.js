var firebaseConfig = {
    apiKey: "AIzaSyBYalmE0_y1L1qkU7AhvLiTGy_S44f-suA",
    authDomain: "lets-chat-app-ef8d2.firebaseapp.com",
    databaseURL: "https://lets-chat-app-ef8d2-default-rtdb.firebaseio.com/",
    projectId: "lets-chat-app-ef8d2",
    storageBucket: "lets-chat-app-ef8d2.appspot.com",
    messagingSenderId: "776276698021",
    appId: "1:776276698021:web:865710a77b72e4af407e4c",
    measurementId: "G-JV8JR36VC8"
  };
   firebase.initializeApp (firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name" 
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "Kwitter_page.html";
}

function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row; 
}); }); }

     
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = Kwitter_page.html;
}
 
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "Kwitter.html";
 }