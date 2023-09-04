const movies = [
    { "title": "Jaws", "director": "Steven Spielberg", "year": "1975" },
    { "title": "Star Wars", "director": "George Lucas", "year": "1977" },
    { "title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018" },
    { "title": "Top Gun", "director": "Tony Scott", "year": "1986" },
    { "title": "Justice League", "director": "Zack Snyder", "year": "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail
// function findMovie(movieTitle) {
//     for (const movie of movies) {
//         if (movie.title === movieTitle) {
//             console.log(movie)
//         }

//     }
// }
// let movie = "Thor:Ragnorok"

// Part 2 = Create a function to return a movie object
function returnMovie(movieTitle) {
    for (const movie of movies) {
        if (movie.title === movieTitle) {
            return movie
        }
    console.log(movie)
    }
    // console.log("Any text, any text at all")
    return "Movie not found"
}

let myMovie=returnMovie("Avengers: Infinity War")
console.log("myMovie",myMovie);

console.log("the movie is called", myMovie.title,"the director is", myMovie.director, "the year it came out was", myMovie.year);
myOtherMovie = returnMovie("Thor: Ragnorok")
console.log(myOtherMovie);

function myMovieDetails(anyMovie){
    if (typeof anyMovie === 'object'){
        return "Movie is an object"
    }
    else {
    return anyMovie
}
}
console.log(myMovieDetails(myOtherMovie))

console.log(myMovieDetails(returnMovie("Jaws")))