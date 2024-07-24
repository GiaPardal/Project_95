var firebaseConfig = {
      apiKey: "AIzaSyBFQf1c3XCDA7jJYA-LBulCvdtYiIry434",
      authDomain: "kwitter-6d26f.firebaseapp.com",
      databaseURL: "https://kwitter-6d26f-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d26f",
      storageBucket: "kwitter-6d26f.appspot.com",
      messagingSenderId: "512878928512",
      appId: "1:512878928512:web:749beec17fd594317c3c65"
    };
    
firebase.initializeApp(firebaseConfig);

//Part 1:
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

//Part 2:
function addroom() {
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding roomname"
      });
      localStorage.setItem("aName", roomname);
      document.getElementById("roomname").value = "";
      window.location = "kwitter_page.html";
}


//Part 3:
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='roomname' id="+ Room_names+" onclick = 'redirectRoomname(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

//Part 4:
function redirectRoomname(name){
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}

//Part 5:
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("aName");
      window.location = "index.html";
}