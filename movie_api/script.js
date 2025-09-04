async function searchMovies(){
    const query = document.getElementById("search").value;

    const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${query}`);

    const data = await res.json();

    const moviesDiv = document.getElementById("movies")

    moviesDiv.innerHTML = "";

    if(data.Search){
        data.Search.forEach((ele) => {
            moviesDiv.innerHTML += `
                <img src=${ele.Poster} alt="Poster" />

                <h3>${ele.Title}</h3>

                <p>${ele.Year}</p>
            `
        });
    }
    else{
        moviesDiv.innerHTML = "<p>No movies data found</p> ";
    }
}