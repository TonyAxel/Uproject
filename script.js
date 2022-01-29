const numberOfFilms = prompt('Сколько фильмов вы смотрели', '');

const personalMOvieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {

    },
    genres: [],
    privat: false
}
for (i = 0; i < 2; i++) {
    const filmsName = prompt('Один из последних просмотренных фильмов', '');
    const filmsRating = prompt('На сколько вы оцените фильм?', '');
    personalMOvieDB.movies[filmsName] = `${filmsRating}`;
}
