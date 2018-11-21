$(document).foundation();

$(document).ready(function () {
  


    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAdPz783_kvw7dVI5FdJAEWb4fQnt-zz18",
    authDomain: "trail-mis.firebaseapp.com",
    databaseURL: "https://trail-mis.firebaseio.com",
    projectId: "trail-mis",
    storageBucket: "trail-mis.appspot.com",
    messagingSenderId: "549578174563"
  };
  firebase.initializeApp(config);


    
  // Initaialize API
  var queryURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200388220-d5e3b13778e51ac99d93ea01e7508197";


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });



      

  






});