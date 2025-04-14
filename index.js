// Here is your key: 9afe3bdf
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

async function main() {
        const movies = await fetch("http://www.omdbapi.com/?apikey=9afe3bdf&")
        const moviesData = await movies.json(); //need to await this to convert the back end to the front end readable
        console.log(movies);
    }
    
    main();

    function showMovies() {
        console.log(movies);
    }