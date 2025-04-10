// Here is your key: 9afe3bdf
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

async function main() {
        const search = await fetch("http://www.omdbapi.com/?apikey=9afe3bdf&s=fast")
        const searchData = await search.json(); //need to await this to convert the back end to the front end readable
        console.log(search)
    }
    
    main();