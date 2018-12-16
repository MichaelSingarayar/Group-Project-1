# Group-Project-1

https://michaelsingarayar.github.io/Group-Project-1/

# Trail HeadZ

Michael Singarayar

Michelle Brytowski

Alexander Drolshagen

Bri Buffington


# Description: 

Our application helps outdoors enthusiasts find nearby hiking trails with information on weather conditions, trail conditions, length of trials and difficulty. It also has information from other hikers on Reddit.

# Motivation: 

Our team came up with the idea because we wanted to inform and connect new and veteran hikers across Colorado and other states with a simple but broad search tool.

# Result: 

Using the REI Hiking Api; the Google Geo Locations API; and the Colorado Hiking subreddit API, we were able to create an app that allows users to search for nearby hiking trails, and connects them with the information to get out and start exploring.

# Team Efforts: 

Alex was responsible for writing the database code and communications with the reddit API, and Michelle and Bri were responsible for writing the code for the UI using Foundation as a building tool. Mike was responsible for writing the code that called the Google Geo Locations API and the REI Hiking Project API. As a team we all helped with deciding which information we wanted to be stored in firebase.

# Individual Responsibilities: 

Alex: Incorporate discussion/community API into page for hikers to connect and share.

Mike: Incorporating Google Geo Locations API into our app to grab the latitude and longitude of the users search input so it could grab the closest trails within a 10 mile area from the REI Hiking Project API. 

Michelle: Initial UI design concept with Foundation, Google font to look like an old-school trail sign

Bri: Working on the UI: Utilizing Foundation- banner, footer, making the pages more uniform, results page (still in Beta), and cleaning up the HTML/CSS/JS code

# Challenges: 

# Backend-

(API’s + DOM manipulation): The biggest problem we had was where to call the api’s in the javascript so that we could still call certain variables to push to the DOM while still making everything functional. Placement of variables within two for-loops was challenging. Also dynamically manipulating the DOM with our trail results and Trail name linking to the REi Hiking website kept us on our toes.

Discussion.html (Reddit JSON): There were 2 challenges that impeded work on the discussion page. The first being that our group’s original plan: to use Meetup.com’s web API in our discussion/community page. While finding the API and acquiring a key was quick and easy, figuring out how to implement the API within a reasonable timeframe was proving difficult and was eating into a lot of time of the project. Ultimately we dropped the Meetup.com API and looked for a different solution. 

Thanks to Marlow, we were able to incorporate the JSON from a specific Reddit community known as /r/coloradohikers! Being that Reddit is free to use, submit, comment, and share across just about any platform, we felt this would be a simple and open-ended solution to allow potential newcomers to join the Subreddit and even meet or plan trips or hikes with others in Colorado!

Once the Reddit JSON was implemented into the code, then came the kind of information we wanted to feed into our Discussion page. Making this functional was easy. However, making it appear the way we wanted it to was difficult enough to throw Jay for a loop. Without going too far into detail and to put simply: “There’s still work to be done.”

# Front End- 

One major challenge with the UI was creating a site using Foundation. The features are similar to Bootstrap, but the terms and grid are slightly more complex. Once there was a basic level of understanding of Foundation, it became more about picking the features that we wanted to focus on and what was needed to complete the look (while keeping it responsive and uniform).

Another Foundation challenge was the interaction of basic CSS with Foundation framework. I had to call to different aspects of the page with the same code in order to get font/styling consistency.




