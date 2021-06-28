// var modesResult = mode(numbers);
// let arr = [3.5, 7.4, 4.6, 6.2, 1.9, 3.3];
// let a = 3 + 5 * 4 - 3 / 2 ** 2;
// a - 0.24;
// a * 2;
// a--;
// console.log(a);

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

// console.log(result); 1110875421

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

// console.log(user.ref().name); John

// let arr = [5, [7, 8, 2], (3)[(1, 9)], 4, 6];
// let a = arr[1][1];
// let b = arr[1][2];
// let c = arr[4];

// arr.unshift(1);
// arr[2].unshift(6);
// arr[4].pop();

// b = arr[3];
// c = arr[4];

// console.log((a * b) / c);

// let str = "1342";
// let count = 0;
// let x = 0;

// while (x < str.length) {
//   x = parseInt(str.charAt(x));
//   count++;
//   x++;
// }

// console.log(count + x);

// let xx = isNaN("true");
// let yz = isNaN(false);

// if (xx == false) {
//   console.log(xx);
// } else {
//   console.log(yz);
// } false

let arr = [
  "1",
  ["2.5", [false]],
  true,
  "false",
  0,
  [[1], (0)[(NaN, undefined, "true")]],
  null,
  "0",
  undefineds,
];
