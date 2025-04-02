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

//Selecting form from the DOM
const reviewForm = document.querySelector("form");

//Event listener - Changed to this rather than use onload since this is what was specifically mentioned
reviewForm.addEventListener("submit", function(event) {

  //Prevents page from trying to load submit
  event.preventDefault();

  // Accessing the inputs from the form and storing their data
  const newReview = {
    username: document.querySelector("#username").value,
    img: document.querySelector("#image").value,
    rating: document.querySelector("#star").value,
    userReview: document.querySelector("#review").value
  };

    // Sanity check to make sure it's working
  console.log(newReview);

  // Add new info to the reviews array
  reviews.push(newReview);

  // Use the above method to render the new review
  renderReviews(newReview);
});