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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("name");

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("name");
    window.location = "index.html";
}

function send(){
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
  });

  document.getElementById("message").innerHTML = "";
}