const $tweets = $(".tweets");
let $p = $(".p");
let lastIndex = -1;
let u1 = {};

function getNewTweets() {
  $.ajax({
    url: "/post",
    method: "GET",
    success: function (tweetsResponse) {
      fetchStudentNames()
        .then(function (studentsResponse) {
          const studentNames = studentsResponse.map(function (student) {
            return {
              id: student.id,
              name: student.name,
            };
          });

          for (let i = lastIndex + 1; i < tweetsResponse.length; i++) {
            const $tweet = $("<div></div>");
            storeFile();
            const tweet = tweetsResponse[i];
            const timestamp = tweet.post_time;
            const tweetId = tweet.id;
            console.log(tweet);
            const studentId = tweet.students_id;
            const content = tweet.post_content;
            const student = studentNames.find(function (s) {
              return s.id === studentId;
            });

            if (student) {
              const studentName = student.name;
              const $username = $(`<a></a>`);
              let $test = $("<div></div>");
              let $h2 = $(`<h2>@${studentName}'s tweets:</h2>`);
              $test.append($h2);

              $username.on("click", function () {
                const tweets = u1[studentId];

                for (let i = 0; i < tweets.length; i++) {
                  const tweet = tweets[i];
                  const message = tweet.message;

                  const timestamp = formatTimestamp(tweet.timestamp);

                  console.log("timestamp First time:GOOD!!", timestamp);
                  // Create a new $tweet element for each tweet
                  $tweet.text(`(${timestamp}): ${message}`);
                  $test.append($tweet);
                  let $deleteButton = $("<button></button>").text("Delete");
                  $tweet.append($deleteButton);

                  (function (tweetId) {
                    $deleteButton.on("click", function () {
                      // Make an AJAX request to delete the tweet
                      console.log("The ID that was deleted:", tweetId); // Use the captured tweetId
                      $.ajax({
                        url: "/post/" + tweetId, // Use the captured tweetId in the URL
                        method: "DELETE",
                        success: function (response) {
                          // Handle successful deletion
                          console.log("Tweet deleted successfully!");
                          // Remove the $tweet element from the DOM
                          $tweet.remove();
                          $h2.remove();
                        },
                        error: function (error) {
                          // Handle error
                          console.error("Error deleting tweet:", error);
                        },
                      });
                    });
                  })(tweetId);
                }

                $p.prepend($test);
              });

              $username.attr("href", `#${studentName}`);
              $username.text(`@${studentName}`);
              $tweet.append($username);
              $tweet.append(`(Just now): ${content}`);
              $tweets.prepend($tweet);
              console.log(timestamp);
            }
          }
          lastIndex = tweetsResponse.length - 1;
        })
        .catch(function (error) {
          console.log("Error retrieving student names:", error);
        });
    },
    error: function (error) {
      console.log("Error retrieving tweet data:", error);
    },
  });
}

getNewTweets();
setInterval(() => {
  getNewTweets();
}, 150);
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
  $.ajax({
    url: "/post", // Replace with the actual endpoint to fetch tweet data from the database
    method: "GET",
    success: function (response) {
      for (let i = 0; i < response.length; i++) {
        const tweet = response[i];
        const user = tweet.students_id;

        if (!u1[user]) {
          u1[user] = [];
        }

        u1[user].push({
          message: tweet.post_content,
          timestamp: Date.now(),
          id: tweet.id,
        });
      }
    },
    error: function (error) {
      console.log("Error retrieving tweet data:", error);
    },
  });
}

$(".tweet-form").on("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const tweetText1 = data.get("tweet-text");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedStudent = selectedOption ? selectedOption.text : "";
  window.visitor = selectedStudent;
  console.log(tweetText1);

  if (tweetText1 === "😒") {
    $tweets.html(" ");
    $p.html("");
    alert("DELETE ALL");
    console.log("detele all!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    $.ajax({
      url: "/post", // Use the captured tweetId in the URL
      method: "DELETE",
      success: function (response) {
        // Handle successful deletion
        console.log("Tweet deleted successfully!");
        // Remove the $tweet element from the DOM
      },
      error: function (error) {
        // Handle error
        console.error("Error deleting tweet:", error);
      },
    });
  }
  if (tweetText1 === "🐝") {
    alert("Good Job!");
    writeTweet(tweetText1);
  }
  if (tweetText1 !== "😒") {
    writeTweet(tweetText1);
  }
  $('input[name="tweet-text"]').val(""); // Clear the input field
});

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
let selectedStudent = ""; // Variable to store the selected student name

// Event listener for the select element
selectElement.addEventListener("change", function () {
  selectedStudent = this.options[this.selectedIndex].text;
  window.visitor = selectedStudent;
  console.log(window.visitor);
});
// Function to retrieve student data from the database
function getStudentDataFromDatabase(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `/students/${id}`,
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
