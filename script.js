"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы смотрели', '');
const personalMOvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const filmsName = prompt('Один из последних просмотренных фильмов', '');
    const filmsRating = prompt('На сколько вы оцените фильм?', '');

    if (filmsName != "" && filmsName.length < 50 && filmsRating != "" && filmsName != null && filmsRating != null) {
        personalMOvieDB.movies[filmsName] = `${filmsRating}`;
    } else {
        i--;
    }
}
if (personalMOvieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMOvieDB.count >= 10 && personalMOvieDB.count < 30) {
    console.log('Вы класический зритель');
} else {
    console.log("Вы киноман!");
}


console.log(personalMOvieDB);