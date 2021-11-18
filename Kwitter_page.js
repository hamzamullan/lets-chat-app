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

   room_name = localStorage.getItem("room_name");
     user_name = localStorage.getItem("user_name");

     function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            Message:msg,
            like:0
      });}

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(message_data);
         console.log(firebase_message_id);

         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];

         name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id="+ firebase_message_id +" value= "+ like +" onclick='updateLike(this.id)'>";
         span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+ like +"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);

      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("Kwitter.html");
}

