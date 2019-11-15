import addToDom from "./add_to_dom";
import axios from 'axios';

const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

getMovies();

async function getMovies() {
    const resp = await axios.get(url);
    const movies = resp.data.feed.entry;

    movies.forEach((movie, index) => {
        addToDom(`${index + 1}. ${movie['im:name'].label}`)
    });
}

async function fetchGetMovies() {
    const resp = await fetch(url);
    const data = await resp.json();
    const movies = data.feed.entry;

    movies.forEach((movie, index) => {
        addToDom(`${index + 1}. ${movie['im:name'].label}`)
    });
}

// function getMovies() {
//     axios.get(url).then((resp) => {
//         const movies = resp.data.feed.entry;

//         movies.forEach((movie, index) => {
//             addToDom(`${index + 1}. ${movie['im:name'].label}`)
//         });
//     })
// }

// fetch(url).then((resp) => {
//     return resp.json();
// }).then((data) => {
//     const movies = data.feed.entry;
//     console.log(movies);
//     movies.forEach((movie, index) => {
//         addToDom(`${index + 1}. ${movie['im:name'].label}`)
//     })
// })

// const myPromise = new Promise(function (resolve, reject) {
//     console.log('create promise')
//     setTimeout(function () {
//         //resolve("inside setTimeOut");
//         reject("wrong");
//     }, 2000);
// });

// myPromise.then(function (data) {
//     console.log('data from promise', data)
// }).catch(function (error) {
//     console.log('error:', error)
// });