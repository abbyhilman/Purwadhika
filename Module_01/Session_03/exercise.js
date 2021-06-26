// Exercise 1

// var number = parseInt(prompt("Masukkan angka: "));

// switch (true) {
//   case number % 2 == 0:
//     console.log(`Angka ${number} merupakan bilangan GENAP!`);
//     alert(`Angka ${number} merupakan bilangan GENAP!`);

//     break;

//   default:
//     console.log(`Angka ${number} merupakan bilangan GANJIL!;`);
//     alert(`Angka ${number} merupakan bilangan GANJIL!;`);
// }

// Exercise 2

// var massa = parseInt(prompt("Berapa Berat Badan anda(kg):"));

// var tinggi = parseInt(prompt("Beratap Tinggi anda(cm):"));

// var tinggiM = tinggi / 100;

// var IMT = massa / Math.pow(tinggiM, 2);
// var status;

// if (IMT > 39.9) {
//   status = "OBESITAS!";
// } else if (IMT >= 30.0 && IMT <= 39.9) {
//   status = "SANGAT BERLEBIH!";
// } else if (IMT >= 25.0 && IMT <= 29.9) {
//   status = "BERLEBIH!";
// } else if (IMT >= 18.5 && IMT <= 24.9) {
//   status = "IDEAL!";
// } else if (IMT < 18.5) {
//   status = "KURANG!";
// } else {
//   status = "IMT Kosong";
// }
// alert(
//   `Massa ${massa} kg & tinggi ${tinggiM} m \nIMT = ${IMT}, BERAT BADAN ANDA ${status}`
// );

// Exercise 3

// Market v1.2

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

var inputTotalPrice = parseInt(
  prompt(
    `Detail Belanja \n\n Apple : ${apple} x ${priceApple} = ${totalApple} \n Grape : ${grape} x ${priceGrape} = ${totalGrape} \n Orange : ${orange} x ${priceOrange} = ${totalOrange} \n Melon : ${melon} x ${priceMelon} = ${totalMelon} \n Mango : ${mango} x ${priceMango} = ${totalMango} \n\n Total: ${totalPrice}`
  )
);

var UangKembali = Math.abs(inputTotalPrice - totalPrice);

if (inputTotalPrice > totalPrice) {
  alert(`Terimakasih, Uang kembali untuk anda ${UangKembali}`);
  //   alert(
  //     `Detail Belanja \n\n Apple : ${apple} x ${priceApple} = ${totalApple} \n Grape : ${grape} x ${priceGrape} = ${totalGrape} \n Orange : ${orange} x ${priceOrange} = ${totalOrange} \n Melon : ${melon} x ${priceMelon} = ${totalMelon} \n Mango : ${mango} x ${priceMango} = ${totalMango} \n\n Total: ${totalPrice} \n\n Uang Yang di Berikan: ${inputTotalPrice} \n\n Uang Kembali: ${UangKembali}`
  //   );
} else if (inputTotalPrice < totalPrice) {
  alert(`Transaksi dibatalkan, Uang yang anda masukkan kurang`);
} else {
  alert(`Terima Kasih!`);
}
