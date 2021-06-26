// XYZ = W

// var x = 4,
//   y = 3,
//   z = 2;
// Cara # 1
// var firstStep = (x + y * z) / (x * y);
// var w = Math.pow(firstStep, 2);

// // Cara #2
// var w = Math.pow((x + y * z) / (x * y), z);

// Exercise 2

// Cube Root
// Cara #1
// var result = Math.cbrt(8);
// Cara #2
// var input = parseInt(prompt("Insert Angka"));
// var result = Math.cbrt(input);
// alert(result);

//  Exercise 3

// Days

// 485 hari : 1 tahun 4 bulan 0 minggu 5 hari

// 485 hari
// var days = parseInt(prompt("Masukkan Jumalah Hari"));

// // 485 / 360 = 1 tahun (360 hari) sisa 125 hari
// var years = Math.floor(days / 360);
// var daysLeft = days % 360;

// // 125 / 30 = 4 bulan (120 hari) sisa 5 hari
// var mounths = Math.floor(daysLeft / 30);
// var daysLeft = daysLeft % 30;

// // 5 / 7 = 0 minggu (0 hari) sisa 5 hari
// var weeks = Math.floor(daysLeft / 7);
// var daysLeft = daysLeft % 7;

// alert(`
//   ${days} hari : ${years} tahun, ${mounths} bulan, ${weeks} minggu, ${daysLeft} hari
// `);

// Exercise 4

// var totalAge = 49,
//   ratioAndi = 2,
//   ratioBudi = 5,
//   ratioTotal = 7;

// var andi = totalAge * (ratioAndi / ratioTotal);
// var budi = totalAge * (ratioBudi / ratioTotal);
// console.log(`Umur Andi Saat ini ${andi}`);
// console.log(`Umur Budi Saat ini ${budi}`);
// andi += 2;
// budi += 2;
// console.log(`Umur Andi 2 Tahun Setelahnya ${andi}`);
// console.log(`Umur Andi 2 Tahun Setelahnya ${budi}`);

// Excercise 5

// Theory

// 60 + 40 = 100 km/h
// Dengan kecepatan 100 km/h. Berapa waktu yang dibutuhkan untuk menempuh jarak 120km
// 120 / 100 = 1.2 jam
// 1.2 * 60 = 72 menit : 60 menit + 12 menit
// 9.00 ===> 10.12

// var distance = 120;

// var velocityA = 60;

// var velocityB = 40;

// var startTimeHour = 9;
// var startTimeMinute = 0;

// var totalVelocity = velocityA + velocityB;

// var needTimeHour = distance / totalVelocity;

// var needTimeMinute = needTimeHour * 60;
// // waktu bertemu (jam) : 9 + 72 / 60
// var meetTimeHour = startTimeHour + Math.floor(needTimeMinute / 60);
// var meetTimeMinute = startTimeMinute + (needTimeMinute % 60);

// console.log(`Waktu Bertemu ${meetTimeHour}:${meetTimeMinute}`);

// Excercise 6

// var rand = Math.random();
// var randomNumber = rand * 100;
// var randFloor = Math.floor(randomNumber);
// var randFinal = randFloor + 1;

// document.write(`<h1>${randFinal}<h1>`);

// Excercise 7
var apple, grape, orange;
var priceApple = 10000;
var priceGrape = 15000;
var priceOrange = 20000;

apple = parseInt(prompt(`Masukkan Jumlah qty Apple`));

grape = parseInt(prompt(`Masukkan Jumlah qty Grape`));

orange = parseInt(prompt(`Masukkan Jumlah qty Orange`));

var totalApple = apple * priceApple;
var totalGrape = grape * priceGrape;
var totalOrange = orange * priceOrange;

var totalPrice = totalApple + totalGrape + totalOrange;

alert(
  `Detail Belanja \n\n Apple : ${apple} x ${priceApple} = ${totalApple} \n Grape : ${grape} x ${priceGrape} = ${totalGrape} \n Orange : ${orange} x ${priceOrange} = ${totalOrange} \n\n Total: ${totalPrice}`
);
