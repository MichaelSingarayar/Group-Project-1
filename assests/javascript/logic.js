$(document).foundation();

$(document).ready(function () {

  var lat = 40.0274;
  var lon = -105.2519;
  var userInput = "";


  $(".button success submit").on("click", function (event) {
    event.preventDefault();
    userInput = $(".input-field").val().trim();
    console.log(userInput);
    userInput = $(".input-field").val("");
  });



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




  //Initailze Reddit.JSON

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
      //var tHead = $("<th class='>");

      // Merging the URL for the post with the title of the post.

      var postTitle = (response.data.children[i].data.title);
      var postURL = (response.data.children[i].data.url);

      var postLink = '<td><a href="' + postURL + '">"' + postTitle + '"</a></td>';

      // Merging the URL for the comments to a dedicated "comments" link

      var commentsURL = "https://www.reddit.com" + (response.data.children[i].data.permalink);

      var numComments = (response.data.children[i].data.num_comments);
      var commentSect = '<td><a href="' + commentsURL + '">"' + numComments + '" Comments</a></td>';

      // var authorName = $("<td>").text(response.data.children[i].data.author);
      // var subredditName = $("<td>").text(response.data.children[i].data.subreddit);

      var postScore = $("<td>").text(response.data.children[i].data.score);

      //tHead.append("Score", "Title", "Comments");
      tRow.append(postScore, postLink, commentSect);

      //$("#reddit-json").append(tHead);
      $("#table-body").append(tRow);


    }


  });

  //Initalize GeoCode API
  var geoJSON = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon + "&key=AIzaSyCW64s7vGbdV-D23-YVGWcTOIeNlMxHpzY"

  $.ajax({
    url: geoJSON,
    method: "GET"
  }).then(function (response) {

    console.log(response);


  });








  // // Initialize API

  // var queryURL = "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=10&key=200388220-d5e3b13778e51ac99d93ea01e7508197";


  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function (response) {
  //   console.log(response);
  //   console.log(response.trails[0].conditionStatus);



  //   for (var i = 0; i < response.trails.length; i++) {


  //     console.log(response.trails[i].name);
  //     console.log(response.trails[i].summary);
  //     console.log(response.trails[i].location);
  //     console.log(response.trails[i].length);
  //     console.log(response.trails[i].difficulty);
  //     console.log(response.trails[i].imgMedium);
  //     console.log(response.trails[i].conditionStatus);
  //     console.log(response.trails[i].stars);


  //     var tRow = $("<tr>");


  //     var nameTd = $("<td>").text(response.trails[i].name);
  //     var sumTd = $("<td>").text(response.trails[i].summary);
  //     var locationTd = $("<td>").text(response.trails[i].location);
  //     var lengthTd = $("<td>").text(response.trails[i].length);
  //     var diffTd = $("<td>").text(response.trails[i].difficulty);
  //     var conTd = $("<td>").text(response.trails[i].conditionStatus);
  //     var deetsTd = $("<td>").text(response.trails[i].conditionDetails);

  //     var starTd = $("<td>").text(response.trails[i].stars);


  //     tRow.append(nameTd, sumTd, locationTd, lengthTd, diffTd, conTd, deetsTd, starTd);

  //     $("tbody").append(tRow);


  //     tRow.append(nameTd, sumTd, locationTd, lengthTd, diffTd, conTd, deetsTd, starTd);

  //     $("tbody").append(tRow);



  //     var divBody = $("<div>");
  //     var image = $("<img>");
  //     image.attr("src", response.trails[i].imgMedium);
  //     console.log("image" + image);

  //     var name = $("<p>").text(response.trails[i].name);
  //     name.addClass("align-center");
  //     var b = $("<br><br>");

  //     divBody.append(image, name, b);
  //     $("#first").append(divBody);









    // };



  // });












  //$(".search-results").hide();

  $(".submit").on("click", function () {

    $(".search-results").show();
  })


});