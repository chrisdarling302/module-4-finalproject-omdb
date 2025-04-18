// Here is your key: 9afe3bdf
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

const inputField = document.getElementById("searchInput");


// load movies from API
async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=9afe3bdf`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    console.log(searchTerm);
    if(data.Response == "True") displayMovieList(data.Search);
}

loadMovies()

function displayMovieList(data) {
    return `<div class="movie__results">
        <div class="result__container">
          <figure class="poster__img">
            <img
              src="${data.Poster}"
              alt=""
            />
          </figure>
          <div>
            <h3>${data.Title}</h3>
            <p>${data.Year}</p>
          </div>
        </div>
      </div>`
}