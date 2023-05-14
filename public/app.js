const $tweets = $(".tweets");
let $p = $(".p");
let lastIndex = -1;
let u1 = {};

console.log("who first");
function getNewTweets() {
  $tweets.html(" ");
  for (let i = lastIndex + 1; i < streams.home.length; i++) {
    const $tweet = $("<div></div>");
    storeFile();
    const tweet = streams.home[i];
    const timestamp = tweet.timestamp || Date.now();
    const $username = $(`<a></a>`);
    $username.on("click", function () {
      let $test = $("<div></div>");
      $test.append(`<h2>@${tweet.user}'s tweets:</h2>`);
      const tweets = u1[tweet.user];
      for (let i = 0; i < tweets.length; i++) {
        const tweet = tweets[i];
        const message = tweet.message;
        const timestamp = formatTimestamp(tweet.timestamp);
        $tweet.text(`(${timestamp}): ${message}`);
        $test.append($tweet);
      }
      $p.prepend($test);
    });
    $username.attr("href", `#${tweet.user}`);
    $username.text(`@${tweet.user}`);
    $tweet.append($username);
    $tweet.append(`(${formatTimestamp(timestamp)}): ${tweet.message}`);
    $tweets.prepend($tweet);
  }
  lastIndex = streams.home.length - 1;
}

getNewTweets();
// setInterval(getNewTweets, 1500);
const $tweetList = $("#tweet-list");

$tweetList.on("click", function (event) {
  getNewTweets(event);
  console.log("ok");
  fetch("/students")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data[0].id);
    });
});

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;

  if (diff < 60000) {
    const seconds = Math.floor(diff / 1000);
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(diff / 86400000);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
}

function storeFile() {
  for (let i = 0; i < streams.home.length; i++) {
    const tweet = streams.home[i];
    const user = tweet.user;

    if (!u1[user]) {
      u1[user] = [];
    }

    u1[user].push({
      message: tweet.message,
      timestamp: tweet.timestamp || Date.now(),
    });
  }
}

$(".tweet-form").on("submit", function (event) {
  event.preventDefault();
  const tweetText = $('input[name="tweet-text"]').val();
  const currentTime = new Date().toLocaleTimeString();

  $.ajax({
    url: "/post",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      post_time: currentTime,
      post_content: tweetText,
      students_id: 2,
    }),

    success: function (response) {
      console.log("Tweet inserted successfully!");
      console.log(response);

      $('input[name="tweet-text"]').val(""); // Clear the input field
      getNewTweets(); // Function to fetch new tweets
    },
    error: function (error) {
      console.error("Error inserting tweet:", error);
    },
  });
});
// $(".tweet-form").on("submit", function (event) {
//   event.preventDefault();
//   const data = new FormData(event.target);
//   const tweetText = data.get("tweet-text");
//   window.visitor = "danny";
//   writeTweet(tweetText);
//   getNewTweets();
//   console.log("where is danny");
//   $('input[name="tweet-text"]').val("");
// });
// Assuming you have an array of student objects with their data
// Get the required elements
// Get the required elements
// Get the required elements
// Get the required elements
const selectElement = document.getElementById("student-select");
const buttonElement = document.getElementById("student-data");
const studentDataElement = document.getElementById("student-data-container");

// Fetch the student names from the database using AJAX
function fetchStudentNames() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/students", // Replace with the actual endpoint to fetch student names
      method: "GET",
      success: function (response) {
        resolve(response);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}

// Populate the dropdown with student names
fetchStudentNames()
  .then((studentNames) => {
    // Add options to the dropdown
    studentNames.forEach((student) => {
      const optionElement = document.createElement("option");
      optionElement.value = student.id;
      optionElement.text = student.name;
      selectElement.appendChild(optionElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching student names:", error);
  });

// Event listener for the button click
buttonElement.addEventListener("click", () => {
  // Get the selected student ID from the dropdown
  const selectedId = selectElement.value;

  // Retrieve the student data from the database based on the selected ID
  // Assuming you have a method called "getStudentDataFromDatabase" that retrieves the data from the database
  getStudentDataFromDatabase(selectedId)
    .then((studentData) => {
      // Clear previous student data
      studentDataElement.innerHTML = "";

      // Loop through the student data and create elements for each column
      for (const key in studentData) {
        if (studentData.hasOwnProperty(key)) {
          const value = studentData[key];

          const element = document.createElement("p");
          element.textContent = `${key}: ${value}`;
          studentDataElement.appendChild(element);
        }
      }

      console.log("Selected Student Data:", studentData);
    })
    .catch((error) => {
      console.error("Error retrieving student data:", error);
    });
});

// Function to retrieve student data from the database
function getStudentDataFromDatabase(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `/students/${id}`, // Replace with the actual endpoint to fetch student data
      method: "GET",
      success: function (response) {
        resolve(response);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
