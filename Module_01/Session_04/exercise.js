// Exercise 1

// var starts = "";
// var row = 0;

// for (var i = 5; i >= row; i--) {
//   for (var j = 0; j < i; j++) {
//     starts += " * ";
//   }
//   starts += "\n";
// }

// console.log(starts);

// var starts = "";
// var star = "*";

// for (var i = 5; i >= row; i--) {
//   for (var j = 0; j < i; j++) {
//     starts += " * ";
//   }
//   starts += "\n";
// }
// var starts_two = "";
// var row_two = 5;
// for (var i = 0; i < row_two; i++) {
//   for (var j = 0; j < i + 1; j++) {
//     starts_two += " * ";
//   }
//   starts_two += "\n";
// }

// console.log(starts + starts_two);

// Solution 1

// var stars = "";
// var rows = 5;

// for (var i = rows; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     stars += " * ";
//   }

//   stars += "\n";
// }

// console.log(stars);

////////////////////////
// DOUBLE RIGHT TRIANGLE
////////////////////////

// var stars = "";
// var rows = 5;

// for (var i = rows; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     stars += " * ";
//   }

//   stars += "\n";
// }

// for (var i = 2; i <= rows; i++) {
//   for (var j = 1; j <= i; j++) {
//     stars += " * ";
//   }

//   stars += "\n";
// }

// console.log(stars);

// Exercise 2

// var starts = "";
// var row = 5;

// for (var i = 0; i < row; i++) {
//   for (var j = 0; j < row - i - 1; j++) {
//     starts += "   ";
//   }
//   for (var k = 0; k <= 2 * i; k++) {
//     starts += " * ";
//   }
//   starts += "\n";
// }

// for (var i = row; i >= 1; i--) {
//   for (var j = 2; j <= row - i + 1; j++) {
//     starts += "   ";
//   }
//   for (var k = 2; k <= 2 * i; k++) {
//     starts += " * ";
//   }
//   starts += "\n";
// }
// console.log(starts);

// Solution 2

// var stars = "";
// var rows = 5;

// // Loop i untuk membuat baris
// // Loop sebanyak nilai yang disimpan pada variable rows
// for (var i = 1; i <= rows; i++) {
//   // loop j untuk menambahkan spasi setiap baris
//   for (var j = rows - i; j >= 1; j--) {
//     stars += "   ";
//   }

//   // loop k untuk menambahkan bintang setiap baris
//   for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
//     stars += " * ";
//   }

//   // menambahkan new line
//   stars += "\n";
// }

// for (var i = rows; i >= 1; i--) {
//   // loop j untuk menambahkan spasi setiap baris
//   for (var j = rows - i; j >= 1; j--) {
//     stars += "   ";
//   }

//   // loop k untuk menambahkan bintang setiap baris
//   for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
//     stars += " * ";
//   }

//   // menambahkan new line
//   stars += "\n";
// }
// console.log(stars);

// Exercise 3

// var number = parseInt(prompt("FizzBuzz :"));

// for (var i = 1; i <= number; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Exercise 4

// Market v1.3

var apple, grape, orange, melon, mango;

var priceApple = 10000;
var priceGrape = 15000;
var priceOrange = 20000;
var priceMelon = 25000;
var priceMango = 30000;

var stockApple = 5;
var stockGrape = 7;
var stockOrange = 4;
var stockMelon = 3;
var stockMango = 4;

apple = parseInt(prompt(`Masukkan Jumlah qty Apple`));

if (apple > stockApple) {
  alert(
    `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockApple}`
  );
  apple = stockApple;
}

grape = parseInt(prompt(`Masukkan Jumlah qty Grape`));

if (grape > stockGrape) {
  alert(
    `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockGrape}`
  );
  grape = stockGrape;
}

orange = parseInt(prompt(`Masukkan Jumlah qty Orange`));

if (orange > stockOrange) {
  alert(
    `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockOrange}`
  );
  orange = stockOrange;
}

melon = parseInt(prompt(`Masukkan Jumlah qty Mango`));

if (melon > stockMelon) {
  alert(
    `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockMelon}`
  );
  melon = stockMelon;
}

mango = parseInt(prompt(`Masukkan Jumlah qty Mango`));

if (mango > stockMango) {
  alert(
    `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockMango}`
  );
  mango = stockMango;
}

var totalApple = apple * priceApple;
var totalGrape = grape * priceGrape;
var totalOrange = orange * priceOrange;
var totalMelon = melon * priceMelon;
var totalMango = mango * priceMango;

var totalPrice =
  totalApple + totalGrape + totalOrange + totalMelon + totalMango;

while (true) {
  var inputTotalPrice = parseInt(
    prompt(
      `Detail Belanja \n\n Apple : ${apple} x ${priceApple} = ${totalApple} \n Grape : ${grape} x ${priceGrape} = ${totalGrape} \n Orange : ${orange} x ${priceOrange} = ${totalOrange} \n Melon : ${melon} x ${priceMelon} = ${totalMelon} \n Mango : ${mango} x ${priceMango} = ${totalMango} \n\n Total: ${totalPrice}`
    )
  );

  var UangKembali = Math.abs(inputTotalPrice - totalPrice);

  if (inputTotalPrice < totalPrice) {
    alert(`Uang yang anda masukkan kurang ${UangKembali}`);
  } else if (inputTotalPrice > totalPrice) {
    alert(`Terimakasih, Uang kembali untuk anda ${UangKembali}`);

    break;
  } else {
    alert(`Terima Kasih !`);

    break;
  }
}
