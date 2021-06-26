// Exercise 1
// var things = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

// console.log(things.sort((a, b) => (a > b ? -1 : 1)));

// Solution 1

// var things = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

// things.sort();

// console.log(things);

// things.reverse();

// console.log(things);

// Exercise 2
// var array = [1, 2, 3, 4, 5, 6, 7];

// var output = [];

// while (array.length) {
//   output.push(array.pop());
// }

// console.log(output);

// Solution 2

// var array = [1, 2, 3, 4, 5, 6, 7, 8];

// var stop = Math.floor(array.length / 2);

// for (var i = 0; i < stop; i++) {
//   var firstIndex = i;
//   var secondIndex = array.length - 1 - i;

//   var tmp = array[firstIndex];

//   array[i] = array[secondIndex];

//   array[secondIndex] = tmp;
// }

// console.log(array);

// Exercise 3

// Market v1.4

/*

      1. Hanya boleh ada satu block white untuk input qty semua produk
      2. Gunakan for loop untuk menghitung total harga setiap barang dan total harga keseluruhan
      3. Terdapat menu tambahan, total semua menu yang dimiliki antara lain :
          1. Menampilkan buah
          2. Menambah buah
          3. Menghapus buah
          4. Membeli buah
          5. Exit
      4. Tampilan daftar buah setiap selesai proses menambah dan mengahapus buah
      5. User kini bisa memilih buah apa yang dibeli, tidak harus beli semua
      6. Setiap user sudah menentukan qty dari suatu produk, masukkanproduk tersebut ke keranjang
      7. Tampilan isi keranjang setiap selesai memilih satu produk untuk dibeli, dibarengi pertanyaan apakah akan lanjut,
      belanja atau tidak.
      8. Kosongkan array setelah selesai melakukan pembayaran

*/

// var apple, grape, orange, melon, mango;

var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

var cart = [];

while (true) {
  var menu = parseInt(
    prompt(`
      Apa yang ingin anda lakukan :
      1. Menampilkan daftar buah
      2. Menambah buah
      3. Menghapus buah
      4. Membeli buah
      5. Exit
    `)
  );

  if (menu == 1) {
    var fruitlist = `Daftar buah \n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitlist += `${i}. ${fruits[i][0]} || Rp. ${fruits[i][1]} || ${fruits[i][2]} \n `;
    }

    alert(fruitlist);
  } else if (menu == 2) {
    var newName = prompt("Masukkan nama buah :");
    var newPrice = parseInt(prompt("Masukkan jumlah harga satuan :"));
    var newStock = parseInt(prompt("Masukkan jumlah stock :"));

    var newFruit = [newName, newPrice, newStock];

    fruits.push(newFruit);

    var fruitlist = `Daftar buah \n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitlist += `${i}. ${fruits[i][0]} || Rp. ${fruits[i][1]} || ${fruits[i][2]} \n `;
    }

    alert(fruitlist);
  } else if (menu == 3) {
    var fruitlist = `Mengapus buah \n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitlist += `${i}. ${fruits[i][0]} || Rp. ${fruits[i][1]} || ${fruits[i][2]} \n `;
    }

    var selIndex = parseInt(prompt(fruitlist));

    fruits.splice(selIndex, 1);

    var fruitlist = `Daftar buah \n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitlist += `${i}. ${fruits[i][0]} || Rp. ${fruits[i][1]} || ${fruits[i][2]} \n `;
    }

    alert(fruitlist);
  } else if (menu == 4) {
    while (true) {
      var fruitlist = `Membeli buah \n\n`;

      for (var i = 0; i < fruits.length; i++) {
        fruitlist += `${i}. ${fruits[i][0]} || Rp. ${fruits[i][1]} || ${fruits[i][2]} \n `;
      }

      var selIndex = parseInt(prompt(fruitlist));

      var selName = fruits[selIndex][0];
      var selPrice = fruits[selIndex][1];
      var selStock = fruits[selIndex][2];

      while (true) {
        var selQty = parseInt(
          prompt(`Masukkan quatity untuk ${selName}, Stock : ${selPrice}`)
        );

        if (selQty > selStock) {
          alert(
            `Quantity yang diminta ${selQty}, melebihi jumlah stock ${selStock}`
          );
        } else {
          cart.push([selName, selPrice, selQty]);

          fruits[selIndex][2] -= selQty;

          break;
        }
      }

      var cartList = `Keranjang \n\n`;

      for (var i = 0; i < cart.length; i++) {
        cartList += `${i}. ${cart[i][0]} || Rp. ${cart[i][1]} || ${cart[i][2]} \n `;
      }

      var again = prompt(
        `${cartList}\n\nIngin belanjang lagi ? ( ya / tidak )`
      );

      if (again == "tidak") {
        break;
      }
    }

    // Hitung Belanja

    var finalPrice = 0;

    for (var i = 0; i < cart.length; i++) {
      cart[i][3] = cart[i][1] * cart[i][2];

      finalPrice += cart[i][3];
    }

    var finalReport = "";

    for (var i = 0; i < cart.length; i++) {
      finalReport += `${cart[i][0]} : ${cart[i][1]} * ${cart[i][2]} = ${cart[i][3]}`;
    }

    while (true) {
      var money = parseInt(
        prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`)
      );

      var margin = Math.abs(money - finalPrice);

      if (money < finalPrice) {
        alert(
          `Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`
        );
      } else {
        if (money > finalPrice) {
          alert(`Terima kasih, uang kembali anda ${margin}`);
        } else {
          alert(`Terima kasih telah membeli`);
        }

        cart = [];

        break;
      }
    }
  } else {
    break;
  }
}

// var apple = parseInt(prompt(`Masukkan Jumlah qty Apple`));

// if (apple > stockApple) {
//   alert(
//     `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockApple}`
//   );
//   apple = stockApple;
// }

// grape = parseInt(prompt(`Masukkan Jumlah qty Grape`));

// if (grape > stockGrape) {
//   alert(
//     `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockGrape}`
//   );
//   grape = stockGrape;
// }

// orange = parseInt(prompt(`Masukkan Jumlah qty Orange`));

// if (orange > stockOrange) {
//   alert(
//     `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockOrange}`
//   );
//   orange = stockOrange;
// }

// melon = parseInt(prompt(`Masukkan Jumlah qty Mango`));

// if (melon > stockMelon) {
//   alert(
//     `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockMelon}`
//   );
//   melon = stockMelon;
// }

// mango = parseInt(prompt(`Masukkan Jumlah qty Mango`));

// if (mango > stockMango) {
//   alert(
//     `Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockMango}`
//   );
//   mango = stockMango;
// }

// var totalApple = apple * priceApple;
// var totalGrape = grape * priceGrape;
// var totalOrange = orange * priceOrange;
// var totalMelon = melon * priceMelon;
// var totalMango = mango * priceMango;

// var totalPrice =
//   totalApple + totalGrape + totalOrange + totalMelon + totalMango;

// while (true) {
//   var inputTotalPrice = parseInt(
//     prompt(
//       `Detail Belanja \n\n Apple : ${apple} x ${priceApple} = ${totalApple} \n Grape : ${grape} x ${priceGrape} = ${totalGrape} \n Orange : ${orange} x ${priceOrange} = ${totalOrange} \n Melon : ${melon} x ${priceMelon} = ${totalMelon} \n Mango : ${mango} x ${priceMango} = ${totalMango} \n\n Total: ${totalPrice}`
//     )
//   );

//   var UangKembali = Math.abs(inputTotalPrice - totalPrice);

//   if (inputTotalPrice < totalPrice) {
//     alert(`Uang yang anda masukkan kurang ${UangKembali}`);
//   } else if (inputTotalPrice > totalPrice) {
//     alert(`Terimakasih, Uang kembali untuk anda ${UangKembali}`);

//     break;
//   } else {
//     alert(`Terima Kasih !`);

//     break;
//   }
// }
