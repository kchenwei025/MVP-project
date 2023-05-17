/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */
// set up data structures

window.streams = {};
streams.home = [];
streams.users = {};
streams.users.Wei = [];
streams.users.Will = [];
streams.users.Danny = [];
streams.users.Tim = [];
streams.users.Ronald = [];
streams.users.Shu = [];
streams.users.Joseph = [];
streams.users.Sussman = [];
streams.users.Mejia = [];
streams.users.Garcia = [];
streams.users.Fitz = [];
streams.users.Christobal = [];
streams.users.Adrian = [];
streams.users.Tayla = [];
streams.users.Jersen = [];
streams.users.Dalton = [];
streams.users.Sebastian = [];
streams.users.Triston = [];
streams.users.Samson = [];
streams.users.Brooklyn = [];
streams.users.Tim = [];
streams.users.Jadyn = [];
streams.users.Simi = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function (newTweet) {
  var username = newTweet.user;
  streams.users[username] ||= [];
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
  console.log(username);

  $.ajax({
    url: "/students",
    method: "GET",
    dataType: "json",
    success: function (response) {
      const studentsData = response.map((student) => ({
        id: student.id,
        name: student.name,
      }));

      // Find the corresponding user ID by matching the username
      var user = studentsData.find(function (student) {
        return student.name.includes(username);
      });

      // Check if the user exists and retrieve the user ID
      var userId = user ? user.id : null;

      // Make an AJAX request to insert the tweet into the database
      $.ajax({
        url: "/post",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          post_time: new Date(),
          post_content: newTweet.message,
          students_id: userId,
        }),
        success: function (response) {
          console.log("Tweet inserted successfully into the database!");
          console.log(response);
        },
        error: function (error) {
          console.error("Error inserting tweet into the database:", error);
        },
      });
    },
    error: function (error) {
      console.error("Error retrieving student data:", error);
    },
  });
};

// utility function
var randomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = [
  "just",
  "",
  "",
  "",
  "",
  "ask me how i",
  "completely",
  "nearly",
  "productively",
  "efficiently",
  "last night i",
  "the president",
  "that wizard",
  "a ninja",
  "Yoda",
];
var verbs = [
  "downloaded",
  "interfaced",
  "deployed",
  "developed",
  "built",
  "invented",
  "experienced",
  "navigated",
  "aided",
  "enjoyed",
  "engineered",
  "installed",
  "debugged",
  "delegated",
  "automated",
  "formulated",
  "systematized",
  "overhauled",
  "computed",
];
var objects = [
  "my",
  "your",
  "the",
  "a",
  "my",
  "an entire",
  "this",
  "that",
  "the",
  "the big",
  "a new form of",
];
var nouns = [
  "cat",
  "koolaid",
  "system",
  "city",
  "worm",
  "cloud",
  "potato",
  "money",
  "way of life",
  "belief system",
  "security system",
  "bad decision",
  "future",
  "life",
  "pony",
  "mind",
];
var tags = [
  "#techlife",
  "#burningman",
  "#sf",
  "but only i know how",
  "for real",
  "#sxsw",
  "#ballin",
  "#omg",
  "#yolo",
  "#magic",
  "",
  "",
  "",
  "",
];

var randomMessage = function () {
  return [
    randomElement(opening),
    randomElement(verbs),
    randomElement(objects),
    randomElement(nouns),
    randomElement(tags),
  ].join(" ");
};

// generate random tweets on a random schedule
var generateRandomTweet = function () {
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.createdAt = new Date();
  addTweet(tweet);
};

var writeTweet = function (message) {
  if (!visitor) {
    throw new Error("set the global visitor property!");
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};

// for (var i = 0; i < 1; i++) {
//   generateRandomTweet();
//   alert("Someone Enter the website");
// }

// setInterval(generateRandomTweet, 5000);
// var scheduleNextTweet = function () {
//   generateRandomTweet();
//   setTimeout(scheduleNextTweet, Math.random() * 3500);
// };
// scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)

// setInterval(generateRandomTweet, 1000);
var isIntervalRunning = false;
var intervalId;

function toggleInterval() {
  if (isIntervalRunning) {
    // Stop the interval
    clearInterval(intervalId);
    isIntervalRunning = false;
  } else {
    // Start the interval
    intervalId = setInterval(generateRandomTweet, 1000);
    isIntervalRunning = true;
  }
}

// Add click event listener to the button
var entryCount = 0;
var isIntervalRunning = false;
var intervalId;

function toggleInterval() {
  if (isIntervalRunning) {
    // Stop the interval
    clearInterval(intervalId);
    isIntervalRunning = false;
  } else {
    // Start the interval
    intervalId = setInterval(generateRandomTweet, 1000);
    isIntervalRunning = true;
  }
}

// Add click event listener to the button
$("#AI-button").on("click", function () {
  var password = prompt("Please enter the password:");
  if (password === "MCSP21") {
    toggleInterval();
  } else {
    alert("Incorrect password. Action denied.");
  }
});

$("#wow").on("click", function () {
  console.log("clicked");
  alert("Mac : Ctrl + Cmd + Space || Windos: Win + ; ");
});

function incrementEntryCount() {
  // Fetch the latest ID from the server
  $.ajax({
    url: "/entries/latest",
    type: "GET",
    success: function (response) {
      const latestId = response.id; // Assuming the server returns the latest ID
      entryCount = latestId;

      $("#entry-count").text(entryCount);
    },
    error: function (error) {
      console.error(error);
      // Handle the error here
    },
  });
}
incrementEntryCount();
setInterval(() => {
  incrementEntryCount();
}, 150);
$.ajax({
  url: "/entries",
  type: "post", // Change this to "post"
  contentType: "application/json",
  data: JSON.stringify({}),
  success: function (response) {
    console.log(response);
    console.log("works");
    // Handle the response data here
  },
  error: function (error) {
    console.error(error);
    // Handle the error here
  },
});
