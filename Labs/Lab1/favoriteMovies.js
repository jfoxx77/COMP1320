
let favoriteMovies = [];

function addFavoriteMovie(movieName) {
    let isStringValid = !movieName.includes('The');
    
    if (isStringValid) {
        favoriteMovies.push(movieName);
    }
}


function printFavoriteMovies() {
    console.log('Favorite Movies: ..');
    console.log('The total number of movies is: ', favoriteMovies.length);
    for (let i = 0; i < favoriteMovies.length; i++) {
        console.log(favoriteMovies[i]);
    }
}


// addFavoriteMovie("Spidernman");
// addFavoriteMovie("Harry Potter");
// addFavoriteMovie("Avatar");
// addFavoriteMovie("Ex Machina");
// addFavoriteMovie("Hobbit");
// addFavoriteMovie("The Man In the High Castle");

// printFavoriteMovies();
