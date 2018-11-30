$(document).foundation();

$(document).ready(function () {




  //on click event  that grabs  user inputs and gets lat and lng from geocode api
  $("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var userInput = $(".input-field").val().trim();
    console.log(userInput);
    //Initalize GeoCode API
    var geoJSON = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userInput + "&key=AIzaSyCW64s7vGbdV-D23-YVGWcTOIeNlMxHpzY"

    $.ajax({
      url: geoJSON,
      method: "GET"
    }).then(function (response) {



      console.log(response);

      console.log(response.results[0].geometry.location.lat);
      console.log(response.results[0].geometry.location.lng);

      //stores lat and lng
      var lat = (response.results[0].geometry.location.lat);
      var lng = (response.results[0].geometry.location.lng);



      console.log("Latitiude " + lat);
      console.log("Longitiude " + lng);

      var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=10&maxResults=10&key=200388220-d5e3b13778e51ac99d93ea01e7508197";


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        console.log(response);


        for (var j = 0; j < response.trails.length; j++) {


          //puts image and name into html
          var divBody = $("<div>");
          var image = $("<img>");
          image.attr("src", response.trails[j].imgMedium);
          console.log("image" + response.trails[j].imgMedium);

          var name = $("<p>").text(response.trails[j].name);
          name.addClass("align-center");
          var b = $("<br><br>");

          divBody.append(image, name, b);
          $("#first").prepend(divBody);











        };











      });








    });


  });










  userInput = $(".input-field").val("");





















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




  //Initailze Reddit API

  var redditJSON = "https://old.reddit.com/r/coloradohikers.json";

  $.ajax({
    url: redditJSON,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    console.log(response.data.children[0].data);


    for (var i = 0; i < response.data.children.length; i++) {

      console.log(response.data.children[i].data.title);
      // console.log(response.data.children[i].data.selftext);
      console.log(response.data.children[i].data.author);
      console.log(response.data.children[i].data.num_comments);
      console.log(response.data.children[i].data.url);
      console.log(response.data.children[i].data.subreddit);
      console.log(response.data.children[i].data.score);


      var tRow = $("<tr>");

      // Merging the URL for the post with the title of the post.
      var postTitle = (response.data.children[i].data.title);
      var postURL = (response.data.children[i].data.url);

      var postLink = '<td><a href="' + postURL + '">"' + postTitle + '"</a></td>';

      // Merging the URL for the comments to a dedicated "comments" link

      var commentsURL = "https://www.reddit.com" + (response.data.children[i].data.permalink);

      var numComments = $("<td>").text(response.data.children[i].data.num_comments);
      var commentSect = '<td><a href="' + commentsURL + '">Comments</a></td>';

      // var authorName = $("<td>").text(response.data.children[i].data.author);
      // var subredditName = $("<td>").text(response.data.children[i].data.subreddit);

      var postScore = $("<td>").text(response.data.children[i].data.score);

      tRow.append(postScore, postLink, numComments, commentSect);

      $(".reddit").append(tRow);


    }


  });










  // Initialize  Hiking API

  //var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=10&maxResults=10&key=200388220-d5e3b13778e51ac99d93ea01e7508197";


  //$.ajax({
  //url: queryURL,
  //method: "GET"
  //}).then(function (response) {
  //console.log(response);
  //console.log(response.trails[0].conditionStatus);



  //for (var j = 0; j < response.trails.length; j++) {

  //log of what we want to grab from api
  //console.log(response.trails[j].name);
  // console.log(response.trails[j].summary);
  // console.log(response.trails[j].location);
  // console.log(response.trails[j].length);
  // console.log(response.trails[j].difficulty);
  // console.log(response.trails[j].imgMedium);
  // console.log(response.trails[j].conditionStatus);
  // console.log(response.trails[j].stars);

  //if we wanted to push results into a table
  // var tRow = $("<tr>");


  // var nameTd = $("<td>").text(response.trails[j].name);
  //  var sumTd = $("<td>").text(response.trails[j].summary);
  //  var locationTd = $("<td>").text(response.trails[j].location);
  //  var lengthTd = $("<td>").text(response.trails[j].length);
  //  var diffTd = $("<td>").text(response.trails[j].difficulty);
  //  var conTd = $("<td>").text(response.trails[j].conditionStatus);
  //  var deetsTd = $("<td>").text(response.trails[j].conditionDetails);

  //  var starTd = $("<td>").text(response.trails[j].stars);


  //  tRow.append(nameTd, sumTd, locationTd, lengthTd, diffTd, conTd, deetsTd, starTd);

  //  $("tbody").append(tRow);


  //  tRow.append(nameTd, sumTd, locationTd, lengthTd, diffTd, conTd, deetsTd, starTd);

  //  $("tbody").append(tRow);


  //puts image and name into html
  //var divBody = $("<div>");
  //var image = $("<img>");
  //image.attr("src", response.trails[i].imgMedium);
  //console.log("image" + image);

  //var name = $("<p>").text(response.trails[i].name);
  //name.addClass("align-center");
  //var b = $("<br><br>");


      divBody.append(image, name, b);
      $("#first").append(divBody);
    

  



  //$(".search-results").hide();

  $(".submit").on("click", function () {

    $(".search-results").show();
  });


});

// star rating

$('[data-rating] .star').on('click', function () {
  var selectedCssClass = 'selected';
  var $this = $(this);
  $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
  $this
    .addClass(selectedCssClass)
    .parent().addClass('is-voted');
});