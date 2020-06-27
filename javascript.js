"use strict";
let numberOfFilms = +prompt("Сколько фильмов ты смотрел?", "");
if (numberOfFilms<10){
    alert("Просмторенно довольно мало фильмов");
} else if (numberOfFilms<30){
    alert("Вы классический зритель");
} else {
    alert("Вы киноман");
}

let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false  
};
let i = 0;
while (i!=2){
    let a = prompt('Один из последних просмотренных фильмов?', '');
    if (a==""){
        continue;
    } else if (a==false){
        continue;
    } else if (a.length>50){
        continue;
    }
    let b = prompt('На сколько оцените его?', '');
    if (b==""){
        continue;
    } else if (b==false){
        continue;
    }
    personalMovieDB.movies[a] = b;
    i++;
}


console.log(personalMovieDB);