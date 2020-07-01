"use strict";
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов ты смотрел?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == false || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов ты смотрел?", "");
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмторенно довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else {
            console.log("Вы киноман");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function () {
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
    },
    writeYourGenres: function () {
        for (var i = 1; i < 4; i++) {
            let qr = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (qr == "" || qr == null) {
                i--;
            } else {
                prompt(`Ваш любимый жанр под номером ${i}`, "");
            }
            personalMovieDB.genres[i - 1] = qr;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};