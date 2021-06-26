/////////
// OBJECT
/////////

// Key value pair
// Value : function, key : method
// Value : selain function , key : property

// const captain = {
//   name: "Kuroky",
//   pets: ["cat", "fox", "bird"],
//   active: true,
//   height: 170,
//   play: function (game) {
//     console.log(`Playing ${game}`);
//   },
// };

////////////////////
// Access with dot .
////////////////////

// captain.play("Dota");

/////////////////////////
// Access with bracket []
/////////////////////////

// captain["play"]("Dota");

/////////////////
// Changing Value
/////////////////

// captain.pets = "dog";
// captain.height = 170;
// captain.play = function (game) {
//   console.log(`Lets play some ${game}`);
// };

//////////////
// Add new key
//////////////

// captain.nationality = "Japan";
// captain.greet = function (time) {
//   console.log(`Good ${time}`);
// };

// console.log(captain.nationality);
// captain.greet("Morning");
// console.log(captain);

//////////////
// Destructure
//////////////

// const { name, pets } = captain;
// console.log(`My name is ${name}, and i have ${pets.length} pets`);

//////
// New
//////

// const capitan = new Object();

// console.log(capitan);

// capitan.name = "Hiki";
// capitan.pets = ["cat", "fish"];
// capitan.play = function (game) {
//   console.log(`Playing${game}`);
// };

// console.log(capitan);

///////////////
// THIS KEYWORD
///////////////

// Isi dari this adalah object itu sendiri

// const person = {
//   firstname: "ByHil",
//   lastname: "Honda",
//   nickname: "By",
//   greet: function (time) {
//     console.log(`Good ${time}`);
//   },
//   intro: function (time) {
//     this.greet(time);
//     console.log(`My first name is ${this.firstname}`);
//   },

//   test: function () {
//     console.log(this);
//   },
// };

// person.greet();
// person.intro("Afternoon");
// person.test();

////////
// CLASS
////////

// Blueprint untuk membuat object, dengan class akan mempermudah dalam membuat object

// const kuroky = {
//   name: "Kuro Salehi",
//   age: 28,
//   nationality: "Germany",
//   position: "Captain",
//   team: "Nigma",
// };

// const bastian = {
//   name: "Sebastian Deb",
//   age: 28,
//   nationality: "France",
//   position: "Coach",
//   team: "OG",
// };

// const puppey = {
//   name: "Clement Ivanov",
//   age: 30,
//   nationality: "Estonia",
//   position: "Captain",
//   team: "Team Secret",
// };

// Syntax

// class Player {
//   constructor(name, age, position, team) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.team = team;
//   }

//   intro() {
//     console.log(`Hello, my full name is ${this.name}`);
//   }
// }

// const dendi = new Player("Danil Ishutin", 30, "Captain", "B8");

// dendi.intro();

//////////////
// Inheritance
//////////////

// class Player {
//   constructor(name, nickname, nationality) {
//     this.name = name;
//     this.nickname = nickname;
//     this.nationality = nationality;
//   }

//   intro() {
//     console.log(
//       `Hello, my full name is ${this.name} but you can call me ${this.nickname}`
//     );
//   }
// }

// Dengan extends ke class Player
// Semua properties dan method milik player akan diturunkan ke CasualPlayer
// class CasualPlayer extends Player {
//   constructor(name, nickname, nationality, job) {
//     // super Memanggil constructor milik player
//     super(name, nickname, nationality);
//     this.job = job;
//   }

//   myJob() {
//     console.log(`I'm not pro player so i have a job, that is ${this.job}`);
//   }
// }

// const tanjirou = new CasualPlayer("Tanjirou", "Kuro", "Japan", "Samurai");

// tanjirou.intro();
// tanjirou.myJob();

// console.log(tanjirou.__proto__);

// class ProPlayer extends Player {
//   constructor(name, nickname, nationality, team) {
//     super(name, nickname, nationality);
//     this.team = team;
//   }

//   myTeam() {
//     console.log(`I'm pro player so i have a team, that is ${this.team}`);
//   }
// }

// const dendi = new ProPlayer("dendi", "Kuro", "Japan", "Secret");

// dendi.intro();
// dendi.myTeam();

/////////////////////////////
// Object for Ever Data Types
/////////////////////////////

//////////////////////////////////////
// Primitive : String, number, boolean
//////////////////////////////////////

// String
// const prjString = "Today is raining";
// const objString = new String("Today is sunny");

// console.log(prjString);
// console.log(objString);

// console.log(typeof prjString);
// console.log(typeof objString);

// Number
// const priNumber = 37000;
// const objNumber = new Number(39000);

// console.log(priNumber.toLocaleString("id"));
// console.log(objNumber.toLocaleString("id"));

// console.log(typeof priNumber);
// console.log(typeof objNumber);

// Boolean

// const priBoolean = true;
// const objBoolean = new Boolean(false);

// console.log(typeof priBoolean);
// console.log(typeof objBoolean);

//////////////////////////////////////////////////
// Object : array, object, string, number, boolean
//////////////////////////////////////////////////
