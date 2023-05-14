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
streams.users.Timothy = [];
streams.users.Ronnie = [];
streams.users.Shu = [];
streams.users.Joseph = [];
streams.users.PhillipSussman = [];
streams.users.PhillipMejia = [];
streams.users.DavidGarcia = [];
streams.users.Fitz = [];
streams.users.DavidChristobal = [];
streams.users.Adrian = [];
streams.users.Tayla = [];
streams.users.Jersen = [];
streams.users.Dalton = [];
streams.users.Sebastian = [];
streams.users.Triston = [];
streams.users.Samson = [];
streams.users.Jesse = [];
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

  // Make an AJAX request to insert the tweet into the database
  $.ajax({
    url: "/post",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      post_time: new Date().toLocaleTimeString(),
      post_content: newTweet.message,
      students_id: 1, //, // You need to implement a function to get the user ID by username
    }),
    success: function (response) {
      console.log("Tweet inserted successfully into the database!");
      console.log(response);
    },
    error: function (error) {
      console.error("Error inserting tweet into the database:", error);
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

for (var i = 0; i < 1; i++) {
  generateRandomTweet();
}

setInterval(generateRandomTweet, 5000);
// var scheduleNextTweet = function () {
//   generateRandomTweet();
//   setTimeout(scheduleNextTweet, Math.random() * 3500);
// };
// scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
