const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=4bdff0b7b1503da2954be3244d740dfe";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=4bdff0b7b1503da2954be3244d740dfe&query=";


const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(SEARCHAPI);

    async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cars = ["The Thing", "run lola run", "mars attacks"];

    const random = Math.floor(Math.random() * cars.length);
    const oneofthecars = cars[random];
    console.log(oneofthecars);
    console.log(random, cars[random]);

    const searchTerm = "the thing";

    if (oneofthecars) {
        getMovies(SEARCHAPI + oneofthecars);

        search.value = "";
    }
});

window.onload = function(){
  // getMovies(SEARCHAPI);
  console.log("Rep");
}
