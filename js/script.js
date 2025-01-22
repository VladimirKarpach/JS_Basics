"use strict";

let numberOfFilms = +prompt('How many filmps have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let i = 0;
for (i = 0; i < 2; i++) {
    let lastWatchedFilm = prompt('Which film have you seen last?', '');
    let filmRate = +prompt('Please reate the film', '');
    personalMovieDB.movies[lastWatchedFilm] = filmRate
};

console.log(personalMovieDB);