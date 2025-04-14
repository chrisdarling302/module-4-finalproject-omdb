// Here is your key: 9afe3bdf
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&
const movieResultsEl = document.querySelector(".movie__results");

async function main() {
        const movies = await fetch("http://www.omdbapi.com/?apikey=9afe3bdf&s=fast")
        const moviesData = await movies.json();
        const moviesArray = Array.isArray(moviesData) ? moviesData : [];
        movieResultsEl.innerHTML = moviesArray.map((movie) => moviesHTML(movie)).join("");
        // const moviesData = await movies.json(); //need to await this to convert the back end to the front end readable
        // console.log(moviesData);
        // console.log(Array.isArray(moviesData));
        // movieResultsEl.innerHTML = moviesData.map((movie) => moviesHTML(movie)).join("");
       console.log(moviesData);
    }
    
    main();

function moviesHTML(movie) {
    return `<div class="movie__results">
        <div class="movie-card__container">
          <figure class="poster__img">
            <img
              src="${movie.Poster}"
              alt=""
            />
          </figure>
          <div>
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
          </div>
        </div>
      </div>`
}