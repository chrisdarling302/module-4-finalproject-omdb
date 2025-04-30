// Here is your key: 9afe3bdf
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const movieGrid = document.getElementById("movieGrid");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const filterContainer = document.getElementById("filterContainer");
  const sortOrder = document.getElementById("sortOrder");

  let currentMovies = [];

  async function searchMovies(query) {
    loadingSpinner.classList.remove("hidden");
    movieGrid.innerHTML = "";

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=9afe3bdf&s=${query}&type=movie`
      );
      const data = await response.json();

      if (data.Response === "True") {
        const movies = data.Search.slice(0, 10);
        displayMovies(movies);
      } else {
        showError("No movies found. Please try a different search term.");
      }
    } catch (error) {
      showError("Failed to fetch movies. Please try again later.");
    } finally {
      loadingSpinner.classList.add("hidden");
    }
  }

  function sortMoviesAndDisplay() {
    const sortedMovies = [...currentMovies].sort((a, b) => {
      const yearA = parseInt(a.Year);
      const yearB = parseInt(b.Year);

      if (sortOrder.value === "asc") {
        return yearA - yearB; // Oldest to newest
      } else {
        return yearB - yearA; // Newest to oldest (default)
      }
    });

    displayMovies(sortedMovies);
  }

  function displayMovies(movies) {
    movieGrid.innerHTML = movies
      .map(
        (movie) => `
              <div class="movie__card">
                  <img 
                      src="${
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "assets/placeholder.png"
                      }" 
                      alt="${movie.Title}"
                      class="movie__poster"
                  >
                  <div class="movie__info">
                      <h3 class="movie__title">${movie.Title}</h3>
                      <div class="movie__details">
                          <span>${movie.Year}</span>
                          <span>${movie.Type}</span>
                      </div>
                  </div>
              </div>
          `
      )
      .join("");
  }

  function showError(message) {
    movieGrid.innerHTML = `
          <div style="text-align: center; color: #f87171; grid-column: 1/-1; padding: 2rem;">
              ${message}
          </div>
      `;
  }

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      searchMovies(query);
    }
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        searchMovies(query);
      }
    }
  });
});
