const movies = [
  {
    name: "Watch Live Stream",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "assets/img/slider-one.jpg",
  },
  {
    name: "Get Update with Olympic games results",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "assets/img/slider-two.jpg",
  },
  // Add the rest of the movies here...
];

// Access the HTML element where you want to display the movies
const movieContainer = document.getElementById("movie-container");

// Function to create and display movie cards
function displayMovies(movies) {
  movies.forEach((movie) => {
    // Create a movie card element
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    // Create an image element
    const movieImage = document.createElement("img");
    movieImage.src = movie.image;
    movieImage.alt = movie.name;
    movieImage.classList.add("movie-image");

    // Create a paragraph for movie description
    const movieDescription = document.createElement("p");
    movieDescription.classList.add("movie-description");
    movieDescription.textContent = movie.des;

    // Append image and description to the movie card
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieDescription);

    // Append the movie card to the movie container
    movieContainer.appendChild(movieCard);
  });
}

// Call the displayMovies function with the movies array
displayMovies(movies);
