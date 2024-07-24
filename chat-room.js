var firebaseConfig = {
    apiKey: "AIzaSyC0QD5SntMbvshqLhU3txIDwFDiF1HTk9M",
    authDomain: "lets-chat-web-app-8fdf8.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-8fdf8-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-8fdf8",
    storageBucket: "lets-chat-web-app-8fdf8.appspot.com",
    messagingSenderId: "515259677979",
    appId: "1:515259677979:web:bdfccbf563fdbc17b1e7be"
  };
  
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("e").innerHTML = "Welcome " + username + "!";

function addRoom() {
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
          purpose: "adding roomname"
    });
    localStorage.setItem("name", roomname);
    document.getElementById("roomname").value = "";
    window.location = "chat_page.html";

}

function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log(Room_names);
    row = "<div class='roomname' id="+Room_names+" onclick = 'redirectRoomname(this.id)'> <b>#" + Room_names + "</b></div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
});});}
getData();



function redirectRoomname(name){
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    window.location = "index.html";
}