"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы смотрели', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы смотрели', '');
    }

}
start();

const personalMOvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMOvieDB);
    }
}
showMyDB(personalMOvieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; ++i){
        personalMOvieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const filmsName = prompt('Один из последних просмотренных фильмов', '');
        const filmsRating = prompt('На сколько вы оцените фильм?', '');

        if (filmsName != "" && filmsName.length < 50 && filmsRating != "" && filmsName != null && filmsRating != null) {
            personalMOvieDB.movies[filmsName] = filmsRating;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMOvieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMOvieDB.count >= 10 && personalMOvieDB.count < 30) {
        console.log('Вы класический зритель');
    } else {
        console.log("Вы киноман!");
    }
}
detectPersonalLevel();


console.log(personalMOvieDB);