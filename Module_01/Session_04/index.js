// LOOP STATEMENTS

/////////////
// While Loop
/////////////

// var number = 1;

// while (number <= 5) {
//   console.log(`Number : ${number}`);

//   number++;
// }

// console.log("Selesai Loop");
// var number = 10;
// while (number >= 1) {
//   console.log(`Number : ${number}`);

//   number -= 2;
// }
// console.log("Selesai Loop");

// var number = 0;

// while (number <= 10) {
//   if (number % 2 == 1) {
//     console.log(`${number} adalah bilangan ganjil`);
//   }

//   number++;
// }
// console.log("Selesai Loop");

// Menampilkan nilai ganjil and genap

// var number = 0;

// while (number <= 5) {
//   if (number % 2 == 1) {
//     console.log(`${number} bilangan Ganjil`);
//   }

//   number++;
// }

// console.log("Selesai Loop");

////////////////
// DO WHILE LOOP
////////////////

// var number = 7;

// do {
//   console.log(`Number : ${number}`);

//   number++;
// } while (number <= 5);

// var number = 3;

// do {
//   if (number % 2 == 1) {
//     console.log(`Number: ${number} adalah Ganjil`);
//   } else {
//     console.log(`Number ${number} adalah Genap`);
//   }
//   // if this number++ tidak ditulis akan terjadi loop infinite
//   number++;
// } while (number <= 10);

////////////
// For Loop
////////////

//////////////////////////
// Menampilkan angka 1 - 5
//////////////////////////

// for (var i = 1; i <= 5; i++) {
//   console.log(`Number : ${i}`);
// }

//////////////////////////
// Menampilkan angka genap
//////////////////////////

// for (var i = 3; i <= 10; i++) {
//   if (i % 2 == 1) {
//     console.log(`Number : ${i} GANJIL`);
//   } else {
//     console.log(`Number : ${i} GENAP`);
//   }
// }

///////////////////////////////////
// BREAK : Menghentikan proses loop
///////////////////////////////////

//////////////
// Print 1 - 3
//////////////

// i = 1

// loop hingga lima kali
// for (var i = 1; i <= 5; i++) {
//   // Jika nilai i = 4
//   if (i == 4) {
//     // Menghentikan proses loop
//     break;
//   }

//   // Tampilkan value pada variabel i
//   console.log(`Loop : ${i}`);
// }

////////////////////////////////////////////////////
// Mencari angka random (0 - 99) yang dapat dibagi 5
////////////////////////////////////////////////////

// Infinite loop : loop yang memiliki condition selalu true

// while (true) {
//   // Mendapatkan angka random dari 0 - 99
//   var rand = Math.floor(Math.random() * 100);
//   // Menampilkan angka random
//   console.log(rand);
//   // Menghentikan loop saat habis di modulus 5
//   if (rand % 5 == 0) {
//     break;
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////
// CONTINUE : Mengabaikan semua proses yang ada setelah keyword ini dan lanjut ke loop berikutnya
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////
// Print 1 - 10. Lewati angka yang habis dibagi 3
/////////////////////////////////////////////////

// // loop sebanyak 10 kali
// for (var i = 1; i <= 10; i++) {
//   // evaluasi nilai i, jika habis dibagi 3
//   if (i % 3 == 0) {
//     // skip ke loop berikutnya
//     continue;
//   }
//   // menampilkan nilai i pada console
//   console.log(`Print : ${i}`);
// }

//////////////////////////
// Drawing Horizontal Line
//////////////////////////

/////////////////////////////////////
// Menjumlahkan  0 + 1 + 2 + 3 + 4 +5
/////////////////////////////////////

// // variabel yang akan menyimpan hasil penjumlahan
// var number = 0;

// // Loop sebanyak lima kali dengan menyediakan angka 1 - 5
// for (var i = 1; i <= 5; i++) {
//   // menjumlahkan nilai terakhir 'number' dengan nilai 'i'
//   number += i;
// }
// // menampilkan hasil penjumlahan
// console.log(number);

///////////////////////////
// Membuat Garis Horizontal
///////////////////////////

// var start = "";

// for (var i = 0; i < 5; i++) {
//   start += "*";
// }

// console.log(start);

/////////////////////////
// Membuat Garis Vertical
/////////////////////////

// var start = "";

// for (var i = 0; i < 5; i++) {
//     start += " * " + "\n";
// }
// console.log(start);

/////////
// SQUARE
/////////

/*
 * * *
 * * *
 * * *
 */

// var start = "";
// var rows = 3;

// // Loop i untuk membuat baris
// // Banyaknya loop i ditentukan dari variable rows
// for (var i = 0; i < rows; i++) {
//   // Loop j untuk menambahkan bintang per baris
//   // Banyaknya bintang setiap baris = jumlah baris
//   for (var j = 0; j < rows; j++) {
//     // Menambahkan satu bintang dari nilai sebelumnya
//     start += " * ";
//   }

//   // Menambahkan new line setiap selesai membuat satu baris bintang (Horizontal line)
//   start += "\n";
// }
// console.log(start);

///////////////////////////////
// RIGHT TRIANGLE (siku - siku)
///////////////////////////////

// Segitiga siku-siku: jumlah bintang perbaris ditentukan 'posisi baris' nya

// var starts = "";
// var row = 5;

// for (var i = 0; i < row; i++) {
//   for (var j = 0; j < i + 1; j++) {
//     starts += " * ";
//   }
//   starts += "\n";
// }

// console.log(starts);

///////////////////////////////
// TRIANGLE (siku - siku) center
///////////////////////////////

// var starts = "";
// var row = 3;

// for (var i = 0; i < row; i++) {
//   for (var j = 0; j < row - i - 1; j++) {
//     starts += " ";
//   }
//   for (var k = 0; k <= 2 * i; k++) {
//     starts += "*";
//   }
//   starts += "\n";
// }

// console.log(starts);
