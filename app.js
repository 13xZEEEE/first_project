const numberOfFilm = +prompt('сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов', ''),
      d = prompt('на сколько оцените его?', '');
      


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
