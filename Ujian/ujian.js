// var modesResult = mode(numbers);
// let arr = [3.5, 7.4, 4.6, 6.2, 1.9, 3.3];
// let d = [];

// let a = arr.map((element) => Math.round(element));
// let b = arr.forEach((item) => {
//   const b2 = Math.ceil(item);
//   if (b2) {
//     d.push(b2);
//   }

//   //   console.log(d);

//   return d;
// });
// let c = arr.filter((value) => value <= 5.2);

// console.log(a);
// let a = 3 + 5 * 4 - 3 / 2 ** 2;
// a - 0.25;
// a * 2;
// a--;
// console.log(a); // 21.25

// Problem 15

// let a = (function func(num) {
//   if (num == 0) return 1;
//   return 1 + func(num - 1);
// })(4);
// console.log(a); // 5

// Problem 16

// let arr = [
//   "book",
//   true,
//   [1, "banana"],
//   null,
//   ["false", [2, NaN], false, ["clock", 0]],
//   NaN,
//   false,
//   [true],
// ];

// console.log(Boolean(arr[4][3][0])); // true

// Problem 18

// let xx = "12345678";
// let yy = "12,34,56,78";
// let res = 0;

// compare = (b, a) => {
//   console.log(a + b);
// };

// do {
//   compare(xx.length, yy.length);
//   xx += 3;
// } while (xx.length < yy.length);

// 19
// 20
// 21

// Problem 21

// let number = 12;
// let result = "";

// while (number > 0) {
//   number + 2;
//   number--;
//   if (number % 3 == 0) continue;
//   result = result + number;
// }

// console.log(result);
// 1110875421;

// Problem 24

// function iniUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }
// let user = new iniUser();

// console.log(user.ref().name); // John

// let arr = [5, [7, 8, 2], 3, [1, 9], 4, 6];
// let a = arr[1][1];
// let b = arr[1][2];
// let c = arr[4];

// arr.unshift(1);
// arr[2].unshift(6);
// arr[4].pop();

// b = arr[3];
// c = arr[4];

// console.log((a * b) / c); // 24

// let str = "1342";
// let count = 0;
// let x = 0;

// while (x < str.length) {
//   x = parseInt(str.charAt(x));
//   count++;
//   x++;
// }

// console.log(count + x); // 7

// let xx = isNaN("true");
// let yz = isNaN(false);

// if (xx == false) {
//   console.log(xx);
// } else {
//   console.log(yz);
// }
// false;

// let arr = [
//   "1",
//   ["2.5", [false]],
//   true,
//   "false",
//   0,
//   [[1], (0)[(NaN, undefined, "true")]],
//   null,
//   "0",
//   undefined,
// ];

// console.log(Boolean(arr[1][1]) + Boolean(arr[5][0])); 2

// var result = 5;

// function a() {
//   console.log(result);
// }

// let b = () => {
//   var result = 10;
//   c();
// };

// var c = function () {
//   var result = 3;
//   a();
// };

// b(); // 5

// let str = "javascript is for everyone yo!".split(" ");
// console.log(str);

// for (let i = 0; i < str.length; i += 1) {
//   console.log(str[i]);
//   console.log(str);

//   return str.push(str[i]);
// }

// console.log(str); error jika tidak memakai return akan menjadi infinite loop

// let list = {
//   satu: [
//     "shoes",
//     ["car", "fan"],
//     [
//       function goods() {
//         console.log("laptop");
//       },
//       { item: "glass" },
//     ],
//   ],
//   dua: () => {
//     return {
//       goods: ["pillow", "laptop", ["gold", () => console.log("laptop")]],
//     };
//   },
//   tiga: {
//     a: "car",
//     b: "door",
//     c: function thing() {
//       return ["laptop"];
//     },
//   },
// };

// list.dua()["goods"][2][1](); output laptop

// list.satu[2][1]goods() error salah

// list.dua.goods[2][1](); error salah

// list.dua().[goods][2][1](); error salah

// let result = "Javascript is very easy",
//   count = 5;

// do {
//   switch (count % 2) {
//     case 0:
//       result = result.slice(count, count + 15);
//       break;
//     default:
//       result = result.slice(count, count + 15);
//   }
//   count -= 1;
// } while (count);

// console.log(result); ery e

// class Kue {
//   constructor(bentuk, rasa) {
//     this.bentuk = bentuk;
//     this.rasa = rasa;
//   }

//   halo = () => {
//     console.log(`Rasa saya adakah ${rasa}`);
//   };
// }

// class Pie extends Kue {
//   constructor(bentuk, item, rasa) {
//     super(bentuk, rasa);
//     this.item = item;
//   }
// }

// let kueBaru = new Pie("Pie", ["Meses", "Apple", "Pandan"]);

// kueBaru.halo(); //ReferenceError: rasa is not defined

// Solved

// class Kue {
//   constructor(bentuk, rasa) {
//     this.bentuk = bentuk;
//     this.rasa = rasa;
//   }

//   halo = () => {
//     console.log(`Rasa saya adakah ${this.rasa}`);
//   };
// }

// class Pie extends Kue {
//   constructor(bentuk, item, rasa) {
//     super(bentuk, rasa);
//     this.item = item;
//   }
// }

// let kueBaru = new Pie("Pie", ["Meses", "Apple", "Pandan"], "Manis");

// kueBaru.halo(); //Rasa saya adakah Manis

// let Word = "Learn Javascript at Purwadhika";

// Word.replace("a", "o");
// Word.split(" ");
// Word.reverse();

// console.log(Word.replace(/a/g, "o")); // TypeError: Word.reverse is not a function

// let arr = [
//   "book",
//   true,
//   [1, "banana"],
//   null,
//   ["false", [2, NaN], false, ["clock", 0]],
//   NaN,
//   false,
//   [true],
// ];

// console.log(Boolean(arr[4][3][0])); // true

// let Number = 12;
// Number--;
// Number--;
// Number * 2;
// Number % 3;
// console.log(Number); // 10

// console.log(([true] && 1 == Boolean("false")) || { true: "false" }); // true

// console.log(typeof console.log);
