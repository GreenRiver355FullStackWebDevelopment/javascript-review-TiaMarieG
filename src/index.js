import { calculateStarAverage } from "./logic.js";

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
window.onload = () => {

  // Selecting the form and adding an event listener for submission
  document.querySelector("button").onclick = handleForm;
}

const displayReviews = document.querySelector(".reviews");

function renderReviews(review) {

  // Creating elements
  const containerDiv = document.createElement("div");
  const img = document.createElement("img");
  const infoDiv = document.createElement("div");
  const username = document.createElement("p");
  const rating = document.createElement("p");
  const userReview = document.createElement("p");

  // Creating textContent
  username.textContent = review.username;
  rating.textContent = review.star;
  userReview.textContent = review.review;

  // Creating img
  img.src = review.image;

  // Adding class to main container
  containerDiv.className = "review_container";

  // Adding info to infoDiv
  infoDiv.appendChild(username);
  infoDiv.appendChild(rating);
  infoDiv.appendChild(userReview);

  // Adding everything to main container
  containerDiv.appendChild(img);
  containerDiv.appendChild(infoDiv);

  // Tie in main container to where it should be loaded
  displayReviews.appendChild(containerDiv);
}

// Using .forEach to iterate over each review and render it with the above function
reviews.forEach(renderReviews);

// Function to add submitted data to existing reviews array
async function handleForm(event) {

  // Adding preventDefault so a submit page doesn't try to load
  event.preventDefault();
}