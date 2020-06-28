"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов ты смотрел?", "");
    while (numberOfFilms == "" || numberOfFilms == false || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов ты смотрел?", "");
    }
}
start();

function detectPersonalLevel() {
    // опрос про количество
    if (numberOfFilms < 10) {
        alert("Просмторенно довольно мало фильмов");
    } else if (numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }
}
detectPersonalLevel();

// Главный обьект
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Цикл вопросов
function rememberMyFilms() {
    let i = 0;
    while (i != 2) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        if (a == "") {
            continue;
        } else if (a == false) {
            continue;
        } else if (a.length > 50) {
            continue;
        }
        let b = prompt('На сколько оцените его?', '');
        if (b == "") {
            continue;
        } else if (b == false) {
            continue;
        }
        personalMovieDB.movies[a] = b;
        i++;
    }
}
rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (var i = 1; i < 4; i++) {  
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}