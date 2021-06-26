// 5 > 5 more than
// 5 == 5 compare data only
// 5 <= 5 less than equal
// 5 < 5 less than
// 5 === 5 compare data only & data string
// 5 >= 5 more tha equal

// && AND
// || OR
// ! NOT

// if statement

// if (condition) {
//   //task
// }

// var rain;

// if (rain == false) {
//   console.log("Kenakan Jas Ujan");
// } else {
//   console.log("Tidak dikenakan");
// }

// var age = 20;

// if (age >= 18) {
//   console.log("Permohonan diterima");
// }

// Nilai Ujian

// Points: 85 - 100: A
// Points: 75 - 84: B
// Points : 60 - 74 : C
// Points: 0 - 59: D
// Points: null : F

// var Points = parseInt(prompt(`Masukkan Nilai Ujian`));
// var grade;

// if (Points >= 85 && Points <= 100) {
//   grade = "A";
// } else if (Points >= 75 && Points <= 84) {
//   grade = "B";
// } else if (Points >= 60 && Points <= 74) {
//   grade = "C";
// } else if (Points >= 0 && Points <= 59) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// alert(`Nilai : ${Points}\nGrade: ${grade}`);

// Switch Case

// var tech = prompt("Insert");

// switch (tech) {
//   case "HTML":
//     alert("HTML berfungsi untuk membuat kerangka website");
//     break;

//   case "CSS":
//     alert("CSS berfungsi intuk mengatur style website");
//     break;

//   case "Javascript":
//     alert("Javascript berfungsi untuk mengolah data");
//     break;

//   case "React":
//     alert("React merupakan framework dari javascript");
//     break;

//   default:
//     alert(`Informasi mengenai ${tech} tidak ditemukan`);
//     break;
// }

// var number = 4;

// switch (true) {
//   case number % 2 == 0:
//     console.log(`${number} merupakan bilangan genap`);
//     break;

//   default:
//     console.log(`${number} merupakan bilangan ganjil;`);
// }

// Falsy and Truthy Values

// Falsy Values : Sebuah nilai yang jika diubah menjadi Boolean akan menjadi false
// 0, "", Null, undefined, NaN
// var result = Boolean(NaN);

// Truthy Values : Sebuah nilai yang jika diubah menjadi Boolean akan menjadi "true"
// Selain dari Falsy Values : angka > 0, angka yang minus, [], {}, string yang ada isinya dan just space
// var result = Boolean(" ");

// var value = 2;

// if (value) {
//   console.log(`${value} adalah Truthy Value`);
// } else {
//   console.log(`${value} adalah Falsy Value`);
// }

// console.log(`Hasil booleannya adalah : ${result}`);
