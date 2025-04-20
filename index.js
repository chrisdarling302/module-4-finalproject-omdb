// Here is your key: 9afe3bdf
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

const movieResultsEl = document.querySelector(".movie__results");


async function search(){
    const data = await fetch(`https://omdbapi.com/?apikey=9afe3bdf&s=fast`)
    const result = await data.json()
    movieResultsEl.innerHTML = result.map((data) => resultHTML(data)).join("");
    console.log(result)

}

search()

function resultHTML(data) {
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
