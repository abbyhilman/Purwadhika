///////////
// FUNCTION
///////////

/*
    Block kode :
        1. Memiliki nama
        2. Dapat digunakan secara berulang
        3. Dapat memiliki input dan output

    
    function showlist

    showlist -> 1
    menambahkan buah -> showlist
    mengahapus buah -> showlist

*/

/* Syntax Function */

/* 
    keyword 'function' + nama + () + {}

    () -> tempat menulist parameter

    Parameter -> variabel tempat menyimpan input

    {} -> Tempat menulis task yang akan dikerjakan saat function dijalankan
*/

// Funtion Declaration

// function firstStep() {
//   var name = "Ethan";
//   console.log(
//     `Segala sesuatu yang besar, selalu dimulai dari satu langkah kecil - ${name}`
//   );
// }

// firstStep();

// Function Expression
// var keepGoing = function () {
//   console.log(`Apapun yang terjadi, teruslah melangkah`);
// };
// keepGoing();

// Perbedaan keduanya

// Hoisted

// leaf();

// function leaf() {
//   console.log(`Hijau`);
// }

// Not Hoisted

// leaf();

// var leaf = function () {
//   console.log(`Hijau`);
// };

/////////////////
// ARROW FUNCTION
/////////////////

// Function Expression (Basic)
// var earth = function () {
//   console.log("Selamatkan bumi");
// };

// ES6

// Function Expression (Arrow)
// var earth = () => {
//   console.log("Selamatkan bumi");
// };

// earth();

///////////////////////////////
// WITHOUT PARAMETER AND RETURN
///////////////////////////////

/*
    input: parameter

    output : return
*/

// var fullname = () => {
//   var firstname = "Isaac";
//   var lastname = "Newton";

//   console.log(`Hello My Name is ${firstname} ${lastname}`);
// };

// fullname();

////////////////////
// Parameter (INPUT)
////////////////////

/*
    input: parameter

    output : return
*/

// var introduction = (name) => {
//   console.log(`Hello My Name is ${name}`);
// };

// introduction("Abby");

// var fullName = (firstName, lastName) => {
//   console.log(`Nama lengkap saya adalah ${firstName} ${lastName}`);
// };

// fullName("Abby", "Hilman");

// var addition = (num1, num2) => {
//   var result = num1 + num2;
//   console.log(`Hasil penjumlahan ${num1} dan ${num2} adalah ${result}`);
// };

// addition(7, 3);

// Array Checking

// var days = ["sunday", "monday", "tuesday"];

// Array ini memiliki 3 data sebagai berikut

// var arrChecking = (arr) => {
// mencari tahu banyaknya data pada array ? Length
//   var arrLen = arr.length;
// menggabungkan setiap data pada array dengan koma dan spasi ? join
//   var arrJoin = arr.join(", ");

//   console.log(`Array ini memiliki ${arrLen} data sebagai berikut ${arrJoin}`);
// };

// arrChecking(days);

// Apakah bisa menyimpan data API berjenis array atau object didalam sebuah input di parameter dan data yang di dalam input dilempar ke navigation page?

// Array Caculator

// var numbers = [1, 2, 3];

// var arrCalculator = (arr, operation, operand) => {
//   var arrResult = [];

//   switch (operation) {
//     case "addition":
//       for (var i = 0; i < arr.length; i++) {
//         arrResult.push(arr[i] + operand);
//       }

//       console.log(`Before : ${arr}\nAfter: ${arrResult}`);

//       break;

//     case "multiplication":
//       for (var i = 0; i < arr.length; i++) {
//         arrResult.push(arr[i] * operand);
//       }

//       console.log(`Before : ${arr}\nAfter: ${arrResult}`);
//       break;

//     default:
//       console.log(`Invalid Operation`);
//       break;
//   }
// };

// arrCalculator(numbers, "multiplication", 10);

//////////////////
// RETURN (OUTPUT)
//////////////////

/* BASIC */

// var basic = () => {
//   return 23;
// };

// var result = basic();
// console.log(result);

/* Random 1-10 */

// var oneToTenRandom = () => {
//   var ran = Math.random();
//   var ranMultiTen = ran * 10;
//   var oneTen = Math.floor(ranMultiTen) + 1;

//   return oneTen;
// };

// var ranResult = oneToTenRandom();
// console.log(ranResult);

///////////////////////
// PARAMETER and RETURN
///////////////////////

// var addition = (num1, num2) => {
//   return num1 + num2;
// };

// var result = addition(2, 5);
// console.log(result);

// var fullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

// var nameResult = fullName("Abby", "Hilman");
// console.log(nameResult);

////////////////////
// DEFAULT PARAMETER
////////////////////

/* Parameter yang memiliki nilai awal ayang akan digunakan jika tidak dapat menerima argument */

// a dan b => parameter
// var x = (a, b) => {}
// 3 dan 5 => argument
// x(3, 5)

// var power = (num1, num2 = 2) => {
// num1 = 2, num2 = 3

// result = 2
//   var result = num1;
// i = 1
//   for (var i = 1; i < num2; i++) {
//     result *= num1;
//   }

//   return [num1, num2, result];
// };

// var result = power(2);
// console.log(`${result[0]} pangkat ${result[1]} adalah ${result[2]}`);

////////////////////
// CALLBACK FUNCTION
////////////////////

// var addition = (num1, num2) => {
//   return num1 + num2;
// };

// var multiplication = (num1, num2) => {
//   return num1 * num2;
// };

// // Calculator
// var calculator = (a, b, cb) => {
//   return cb(a, b);
// };

// var result = calculator(5, 2, multiplication);
// console.log(result);

// Array Calculator

// var numbers = [23, 12, 39];

// var arrCalculator = (arr, operand, cb) => {
//   var arrResult = [];
//   var operationaResult;

//   for (var i = 0; i < arr.length; i++) {
//     operationaResult = cb(arr[i], operand);
//     arrResult.push(operationaResult);
//   }

//   return arrResult;
// };

// var result = arrCalculator(numbers, 5, multiplication);
// console.log(`nilai awal ${numbers} setelah di kalikan ${result}`);

////////////////////////
// CALLING OTHE FUNCTION
////////////////////////

/* sebuah function dapat memanggil function lainnya secara lansung */

// var first = () => {
//   console.log("First");
// };

// var second = () => {
//   first();
//   console.log("Second");
// };

// second();

// var add = (a, b) => {
//   return a + b;
// };

// var sub = (a, b) => {
//   return a * b;
// };

// var mul = (a, b) => {
//   return a / b;
// };

// var calculator = (num1, num2, opertaion) => {
//   return opertaion(num1, num2);
// };

// var result = calculator(2, 3, sub);
// console.log(result);

/////////////////////
// RECURSIVE FUNCTION
/////////////////////

// Function yang memanggil dirinya sendriri

// var countdown = (counter) => {
//   console.log(counter);

//   counter--;

//   if (counter >= 0) {
//     countdown(counter);
//   }
// };

// countdown(5);

///////////
// FOR EACH
///////////

/* Direct Argument */

// var addition = (a, b) => {
//   return a + b;
// };

// addition(2, 5);

/* Direct Callback */

// var direct = (arr, cb) => {
//   return cb(arr);
// };

// var nums = [1, 2, 3];

// var result = direct(nums, (ary) => {
//   return ary.length;
// });

// console.log(result);

// For Each : Loop

// var nums = [1, 2, 3];

// const cb = (val) => {
//   console.log(`Loop ${val}`);
// };

// nums.forEach(cb);

// nums.forEach((val) => {
//   console.log(`Loop Direct ${val}`);
// });

// For Each : value on index

// var nums = ["A", "B", "C"];

// var cb = (val, index) => {
//   console.log(`Index ke ${index} : ${val}`);
// };

// nums.forEach(cb);

// For Each : third argument

// var days = ["sunday", "monday", "tuesday"];

// days.forEach((val, idx, arr) => {
//   console.log(`val : ${val}`);
//   console.log(`idx : ${idx}`);
//   console.log(`arr : ${arr}`);
// });

// For Each : multiple by two

// var nums = [2, 5, 7];

// nums.forEach((val) => {
//   console.log(val * 2);
// });

// For Each : highest and lowest

// var nums = [39, 76, 13, 5, 250, 123];
// var min, max;

// nums.forEach((val, index) => {
//   if (index == 0) {
//     min = max = val;
//   } else if (val < min) {
//     min = val;
//   } else if (val > max) {
//     max = val;
//   }
// });

// console.log(`Min: ${min}\nMax: ${max}`);

// Exerciese in topic 05 Advanced Array Methods and Variable Scopes with for each

// var nums = [11, 22, 34, 41, 52, 63, 71, 86];

// var oddEven = (numbers) => {
//   var odds = [];
//   var evens = [];

//   numbers.forEach((numbers) => {
//     if (numbers % 2 == 1) {
//       odds.push(numbers);
//     } else {
//       evens.push(numbers);
//     }
//   });

//   return [odds, evens];
// };

// var result = oddEven(nums);
// console.log(result);

//////
// MAP
//////

/*
    1. Callback function harus me-return suatu nilai (tipe data apapun), dimana setiap nilai yang direturn akan
    masuk kedalam array baru yang dibuat oleh function map secara internal, bukan karena kita menulis 
    kodenya

    2. Map akan me-return array baru yang suda berisi nilang yang di return oleh callback function
*/

// Multiple by two : For Each

// var numbers = [1, 2, 3];
// var arrResult = [];

// numbers.forEach((numbers) => {
//   arrResult.push(numbers * 2);
// });

// console.log(`for each : ${arrResult}`);

// Multiple by two : Map

// var mapResult = numbers.map((numbers) => {
//   return numbers * 2;
// });

// console.log(`Map : ${mapResult}`);

// Man or Woman

// var persons = [
//   ["Janette", "Woman"],
//   ["Kim Shin", "Man"],
//   ["Tony", "Man"],
// ];

// var mapResult = persons.map((person) => {
//   var name = person;

//   if (person[1] == "Woman") {
//     return `Mrs. ${name[0]}`;
//   } else {
//     return `Mr. ${name[0]}`;
//   }
// });

// console.log(mapResult);

// Exerciese 2 in topic 05 Advanced Array Methods and Variable Scopes with map

// var nums = [11, 22, 34, 41, 52, 63, 71, 86];

// var oddEven = (numbers) => {
//   var mapResult = numbers.map((numbers) => {
//     if (numbers % 2 == 1) {
//       return [numbers, "Ganjil"];
//     } else {
//       return [numbers, "Genap"];
//     }
//   });

//   return mapResult;
// };

// var oddEven = (numbers) => {
//   var odds = [];
//   var even = [];
//   var mapResult = numbers.map((numbers) => {
//     if (numbers % 2 == 1) {
//       return odds.push(numbers);
//     } else {
//       return even.push(numbers);
//     }
//   });

//   return [mapResult];
// };

// var oddEvenResult = oddEven(nums);

// console.log(oddEvenResult);

////////////////
// MAP DUPLICATE
////////////////

/*
  1. Method map membutuhkan array untuk di proses, dan callback function yang akan memproses setiap data dari
  array.

  2. Map akan menjalankan callback function sebanyak data yang ada di array, dan setiap kali dijalankan, data 
  pada array akan masuk secara bergantian

  3. Callback yang masuk kedalam map akan melakukan return nilai, dan nilai yang di return ini akan dimasukkan
  ke dalam array baru

  4. Array baru yang berisi hasil dari proses map akan direturn oleh map sehingga hasilnya dapat disimpan ke 
  dalam variabel
*/

// map duplicate : for loop

// var mapForLoop = (arr, cb) => {
//   var arrMap = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrMap.push(cb(arr[i]));
//   }

//   return arrMap;
// };

// // map duplicate : for each

// var mapForEach = (arr, cb) => {
//   var arrMap = [];

//   arr.forEach((val) => {
//     arrMap.push(cb(val));
//   });

//   return arrMap;
// };

// var numbers = [1, 2, 3];
// var multi = (number) => {
//   return number * 2;
// };

// var forEachResult = mapForEach(numbers, multi);
// console.log(forEachResult);

// var forLoopResult = mapForLoop(numbers, multi);
// console.log(forLoopResult);

// var mapResult = numbers.map(multi);
// console.log(mapResult);

/////////
// FILTER
/////////

/*
  1. Callback function harus me-return suatu boolean.

  2. Callback me-return true : value yang sedang diproses akan disimpan ke array baru.

  3. Callback me-return false : value yang sedang diproses akan diabaikan

  4. Filter akan me-return array baru.
*/

// odd Filter

// var numbers = [1, 2, 3, 4, 5];

// var numResult = numbers.filter((number) => {
//   if (number % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// });

// var filterResult = numbers.filter((number) => {
//   return number % 2 == 1;
// });

// console.log(filterResult);

// Character length filter (more than 5 characters)

// var words = ["Koro Sensei", "Jin Mori", "Eren", "Tanjirou", "Zorro"];

// var wordResult = words.filter((word) => {
//   return word.length > 5;
// });

// console.log(wordResult);

// Buat Function yang akan memfilter sesseorang yang memiliki umur lebih dari 30 atau tinggal di jakarta

// var people = [
//   ["John", 43, "Jakarta"],
//   ["Baby", 21, "Jakarta"],
//   ["Tony", 34, "Surabaya"],
//   ["Justin", 29, "Banjarmasin"],
// ];

// var filterPeople = (arr) => {
//   return arr.filter((val) => {
//     return val[1] > 30 || val[2] == "Jakarta";
//   });
// };

// var filterResult = filterPeople(people);

// console.log(filterResult);

///////////////////
// FILTER DUPLICATE
///////////////////

/* Filter Duplicate : For Loop */
// var filterForLoop = (arr, cb) => {
//   var arrLoop = [];

//   for (var i = 0; i < arr.length; i++) {
//     var isTrue = cb(arr[i]);

//     if (isTrue) {
//       arrLoop.push(arr[i]);
//     }
//   }

//   return arrLoop;
// };

// var numbers = [1, 23, 31, 20, 41, 88];

// var odd = (val) => {
//   return val % 2 == 1;
// };

// var result = filterForLoop(numbers, odd);
// console.log(result);

/* Filter Duplicate: For Each */

// var filterForEach = (arr, cb) => {
//   var arrForEach = [];

//   arr.forEach((val) => {
//     if (cb(val)) {
//       arrForEach.push(val);
//     }
//   });

//   return arrForEach;
// };

// var numbers = [1, 23, 31, 20, 41, 88];

// var odd = (val) => {
//   return val % 2 == 1;
// };

// var result = filterForEach(numbers, odd);
// console.log(result);

//////////////////
// SORT (Advanced)
//////////////////

// String

// var words = ["red", "apple", "rain", "cat", "green"];

// words.sort();

// console.log(words);

// Numbers

// var numbers = [23, 47, 13, 3, 9, 240];

/* 
  1. Callback function memiliki dua parameter

  2. Callback function harus me-return nilai dari salah satu kondisi

      a. return < 0, a akan berada sebelum b

      b. return 0 , posisi a dan b tidak berubah

      c. return > 0, b akan berada sebelum a
*/
// var asc = (a, b) => {
//   return b - a;
// };

// numbers.sort(asc);

// console.log(numbers);

// Buat Function yang akan mensorting array 2 dimensi ini berdasarkan nama, dan umur (ascending)

// Clue : comparison between character

// var persons = [
//   ["John", 44],
//   ["John", 43],
//   ["Baby", 21],
//   ["Justin", 29],
// ];

// var personSort = (arr) => {
//   arr.sort((b, a) => {
//     if (a[0] < b[0]) {
//       return -1;
//     } else if (a[0] > b[0]) {
//       return 1;
//     } else {
//       return b[1] - a[1];
//     }
//   });

//   return arr;
// };

// var result = personSort(persons);
// console.log(result);

/////////////////
// VARIABLE SCOPE
/////////////////

/* 
  Variable Scope : Cakupan wilayah yang dimiliki oleh variable

  Global Scope : Dapat diakses dari manapun
  Local Scope : Memiliki ruang terbatas untuk diakses (function scope dan block scope)
*/

/*
  VAR

  1. Function scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
*/

// var fnScope = () => {
//   var name = "Shaun";
//   console.log(`fnScope : ${name}`);
// };

// fnScope();

// while (true) {
//   var name4 = "Mikasa";
//   console.log(`fnScope : ${name4}`);
//   break;
// }

// console.log(`Diluar Scope: ${name4}`);

/*  
  LET

  1. Function Scope : Saat dibuat didalam function, maka hanya dapat diakses dari dalam function itu saja.
  2. Block scope: Saat dibuat didalam kurung kurawal (if, switch, for, while, do while)

  Note: 
  - Tidak dapat melakukan deklarasi ualng pada scope yang sama
*/

let fnScope = () => {
  let color1 = "Purple";
  console.log(`fnScope : ${color1}`);
};
fnScope();
// console.log(`Diluar Scope: ${color1}`);

// if (true) {
//   let color2 = "red";
//   console.log(`if :${color2}`);
// }
// console.log(`Diluar if : ${color2}`);

// while (true) {
//   let color3 = "Orange";
//   console.log(`while : ${color3}`);
//   break;
// }

// console.log(`Diluar while: ${color3}`);
