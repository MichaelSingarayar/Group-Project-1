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



 //Initailze Redit API

  var redditJSON = "https://old.reddit.com/r/coloradohikers.json";

  $.ajax({
    url: redditJSON,
    method: "GET"
  }).then(function (response) {

    console.log(response.data.children[0].data);
    

  });

// Initaialize API

  var queryURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200388220-d5e3b13778e51ac99d93ea01e7508197";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(response.trails[0].conditionStatus);



    for (var i = 0; i < response.trails.length; i++) {


    console.log(response.trails[i].name);
    console.log(response.trails[i].summary);
    console.log(response.trails[i].location);
    console.log(response.trails[i].length);
    console.log(response.trails[i].difficulty);
    console.log(response.trails[i].imgMedium);
    console.log(response.trails[i].conditionStatus);
    console.log(response.trails[i].stars);


    var tRow = $("<tr>");

    
    var nameTd = $("<td>").text(response.trails[i].name);
    var sumTd = $("<td>").text(response.trails[i].summary);
    var locationTd = $("<td>").text(response.trails[i].location);
    var lengthTd = $("<td>").text(response.trails[i].length);
    var diffTd = $("<td>").text(response.trails[i].difficulty);
    var conTd = $("<td>").text(response.trails[i].conditionStatus);
    var deetsTd = $("<td>").text(response.trails[i].conditionDetails);

    var starTd = $("<td>").text(response.trails[i].stars);

    tRow.append(nameTd, sumTd, locationTd, lengthTd, diffTd, conTd, deetsTd, starTd);

    $("tbody").append(tRow);
    


  };
});


});