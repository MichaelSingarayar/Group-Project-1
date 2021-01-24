$(document).foundation();

// more click- profile stats
$('.card-profile-stats-more-link').click(function (e) {
  e.preventDefault();
  if ($(".card-profile-stats-more-content").is(':hidden')) {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
  $(this).next('.card-profile-stats-more-content').slideToggle();
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

  var database = firebase.database();







  //Initailze Reddit.JSON

  var redditJSON = "https://old.reddit.com/r/coloradohikers.json";

  $.ajax({
    url: redditJSON,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    console.log(response.data.children[0].data);


    for (var i = 0; i < response.data.children.length; i++) {

      // Create a row in the table to inject Reddit JSON info

      var tRow = $("<tr>");

      // Inject the URL for the reddit post into the title of the post.

      var postTitle = (response.data.children[i].data.title);
      var postURL = (response.data.children[i].data.url);

      var postLink = '<td><a href="' + postURL + '" target="_blank">' + postTitle + '</a></td>';


      // Injecting the URL for the comments to a dedicated "comments" button

      var commentsURL = "https://www.reddit.com" + (response.data.children[i].data.permalink);

      var numComments = (response.data.children[i].data.num_comments);
      var commentSect = '<td><a class="success button" href="' + commentsURL + '" target="_blank">' + numComments + ' Comments</a></td>';

      // Display the Reddit score of the post from

      var postScore = $("<td>").text(response.data.children[i].data.score);


      tRow.append(postScore, postLink, commentSect);

      // append tRow into the HTML table

      $("#table-body").append(tRow);

      // Note that when a user is logged into Reddit with their own account
      // the discussion page will display the maximum number of posts the user has allowed to appear
      // on their own front page.

      // The default number of posts per page on Reddit is 25

      // If the user's account allows 100 reddit posts to appear per page on Reddit, then 100 pages will
      // appear on discussion.html


    }


  });
















  //on click event  that grabs  user inputs and gets lat and lng from geocode api
  $("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var userInput = $(".input-field").val().trim();





    console.log(userInput);
    //Initalize GeoCode API
    var geoJSON = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userInput + "&key=AIzaSyC_o2Uz1Z9HeKMDbDoQXJwWCI_IE-Onk6U"



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

     

      // Initialize Hiking Api
      var queryURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lng + "&maxDistance=10&maxResults=10&key=200388220-d5e3b13778e51ac99d93ea01e7508197";


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        console.log(response);

        // for loop that grabs the 10 responses
        for (var j = 0; j < response.trails.length; j++) {
          //Defines objects for firebase database
          var na = response.trails[j].name;
          var sum = response.trails[j].summary;
          var location = response.trails[j].location;
          var length = response.trails[j].length;
          var diff = response.trails[j].difficulty;
          var con = response.trails[j].conditionStatus;
          var deets = response.trails[j].conditionDetails;
          var url = response.trails[j].url;
          console.log(url);



          var userIn = {
            userInput: userInput,
            name: na,
            latitiude: lat,
            longitiude: lng,
            summary: sum,
            location: location,
            length: length,
            difficulty: diff,
            conditionStatus: con,
            conditionDetails: deets,

          };

          database.ref().push(userIn);




          //Puts image and name and other parameters into html
          var image = $("<img>");
          image.attr("src", response.trails[j].imgMedium);
          console.log("image" + response.trails[j].imgMedium);
          image.addClass("card-image");
          var name = (response.trails[j].name);
          // Makes the trail name a link to REI hiking trail webiste of desired trail
          var nameUrl = '<h4><a href="' + url + '">"' + name + '"</a><h4>';
          var summary = $("<p>").text("Trail Summary: " + response.trails[j].summary);
          var loc = $("<p>").text("Location: " + response.trails[j].location);
          var leng = $("<p>").text("Length of Trail: " + response.trails[j].length + " miles");
          var dif = $("<p>").text("Trail Difficulty: " + response.trails[j].difficulty);
          var co = $("<p>").text("Trail Status: " + response.trails[j].conditionStatus);
          var deet = $("<p>").text("Trail Condition: " + response.trails[j].conditionDetails);

          var b = $("<br><br>");

          // Creates card div
          var newCell = $("<div>");
          newCell.addClass("cell");
          var newCard = $("<div>");
          newCard.addClass("card searchCard");
          newCard.append(image, nameUrl,loc, summary, leng, dif, co, deet, b);

          newCell.append(newCard);





          $("#first").prepend(newCell);



          // for loop that makes the images into links to result page
          var images = document.getElementsByTagName("img");
          for (var k = 0; k < images.length; k++) {
            var imageI = images[k];
            imageI.onclick = function (event) {
              window.location.href = this.id + '../Group-Project-1/results.html';
              var im = $("<img>");

              //thi isnt adding the source of the image
              im.attr("src", images[k]);

              //need help looking within this new document

              this.$("#img").append(im);








            };
          };













        };








      });











    });


  });










  // clears user input field 
  userInput = $(".input-field").val("");




  $(".submit").on("click", function () {

    $(".search-results").show();
  });


});
