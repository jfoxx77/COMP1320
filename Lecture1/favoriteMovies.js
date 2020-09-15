
let favoriteMovies = [];

function addFavoriteMovie(movieName)
{
    let isStringValid = !movieName.includes("The");
    
    if (isStringValid)
        favoriteMovies.push(movieName);
}


function printFavoriteMovies()
{
    console.log("Favorite Movies: \n")

    for (let i = 0; i < favoriteMovies.length; i++) {
        console.log(favoriteMovies[i]);
    }
}

addFavoriteMovie("Spidernman");
addFavoriteMovie("Harry Potter");
addFavoriteMovie("The Man In the High Castle");

printFavoriteMovies();
