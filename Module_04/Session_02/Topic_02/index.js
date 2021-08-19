// own module
// let { penjumlahan, pengurangan } = require("./myModules");

// console.log(penjumlahan(10, 2));
// console.log(pengurangan(10, 2));

// js modules
// let timer = require("timers");

// timer.setTimeout(
//   (waktu = () => {
//     console.log("Hello");
//   }),
//   2000
// );

// let url = require("url");
// let link = "http://lin.id/data.html?tgl=12&bln=november";

// let parsing = url.parse(link, true);

// console.log("Host : ", parsing.host);
// console.log("Path : ", parsing.path);
// console.log("Query : ", parsing.search);

// npm modules

let colors = require("colors");

console.log("Hello".red);
console.log("Hello".rainbow);
console.log("Hello".bgWhite.black);

let moment = require("moment");

let today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

console.log(today);
