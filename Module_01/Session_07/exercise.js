// Exercise 1

//////////////
// Market V1.6
//////////////

class Products {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class FastFood extends Products {
  constructor(name, price, stock, expired) {
    super(name, price, stock);
    this.category = 1;
    this.expired = expired;
  }
}

class Cloth extends Products {
  constructor(name, price, stock, size) {
    super(name, price, stock);
    this.category = 2;
    this.size = size;
  }
}

class Electornic extends Products {
  constructor(name, price, stock, warranty) {
    super(name, price, stock);
    this.category = 3;
    this.warranty = warranty;
  }
}

class Fruits extends Products {
  constructor(name, price, stock, sugar) {
    super(name, price, stock);
    this.category = 4;
    this.sugar = sugar;
  }
}

const products = [
  { category: 1, name: "Noodle", price: 20000, stock: 8, expired: 2020 },
  { category: 2, name: "Hoodie", price: 15000, stock: 7, size: "L" },
  { category: 3, name: "Headphone", price: 20000, stock: 8, warranty: "Yes" },
  { category: 4, name: "Apel", price: 10000, stock: 5, sugar: "High" },
];

var createlist = (arr, header, kind = 1) => {
  let list = `${header} \n\n`;

  if (kind) {
    arr.forEach((val, index) => {
      const {
        name,
        price,
        stock,
        category,
        expired,
        size,
        sugar,
        warranty,
      } = val;
      let newList = `${index}. NAME : ${name} || STOCK : ${stock} || PRICE ${price} `;

      switch (category) {
        case 1:
          newList += ` || EXP : ${expired}\n`;
          break;
        case 2:
          newList += ` || SIZE : ${size}\n`;
          break;
        case 3:
          newList += ` || WARRANTY : ${warranty}\n`;
          break;
        default:
          newList += ` || SUGAR : ${sugar}\n`;
          break;
      }
      list += newList;
    });
  } else {
    arr.forEach((val, index) => {
      const { name, price, qty } = val;
      list += `${index}. ${name} || Rp. ${price} || qty : ${qty}  \n `;
    });
  }

  return list;
};

while (true) {
  const menu = parseInt(
    prompt(`
        Apa yang ingin anda lakukan :
        1. Menampilkan daftar produk
        2. Menambah produk
        3. Menghapus produk
        4. Membeli produk
        5. Exit
      `)
  );

  if (menu == 1) {
    alert(createlist(products, "Daftar Produk"));
  } else if (menu == 2) {
    const catOpt = parseInt(
      prompt(
        "Kategori produk yang ingin ditambahkan\n\n" +
          "1. Cepat Saji \n" +
          "2. Pakaian \n" +
          "3. Elektronik \n" +
          "4. Buah \n\n"
      )
    );

    const name = prompt("Masukkan nama produk :");
    const price = parseInt(prompt("Masukkan jumlah harga satuan :"));
    const stock = parseInt(prompt("Masukkan jumlah stock :"));

    let newProduct;
    switch (catOpt) {
      case 1:
        const expired = prompt("Masukan angka expired");
        newProduct = new FastFood(name, price, stock, expired);
        break;
      case 2:
        const size = prompt("Masukan size produk");
        newProduct = new Cloth(name, price, stock, size);
        break;
      case 3:
        const warranty = prompt("Masukan status garansi");
        newProduct = new Electornic(name, price, stock, warranty);
        break;

      default:
        const sugar = prompt("Masukan tingkat kadar gula");
        newProduct = new Fruits(name, price, stock, sugar);
        break;
    }

    products.push(newProduct);

    alert(createlist(products, "Daftar Produk"));
  } else if (menu == 3) {
    const selIndex = parseInt(prompt(createlist(products, "Mengapus Produk")));

    products.splice(selIndex, 1);

    alert(createlist(products, "Daftar Produk"));
  } else if (menu == 4) {
    const cart = [];
    while (true) {
      //   fruits.forEach((val, index) => {
      //     fruitlist += `${index}. ${val[0]} || Rp. ${val[1]} || ${val[2]}  \n `;
      //   });

      const selIndex = parseInt(prompt(createlist(products, "Membeli Produk")));

      const { name, price, stock } = products[selIndex];

      while (true) {
        const qty = parseInt(
          prompt(`Masukkan quatity untuk ${name}, Stock : ${price}`)
        );

        if (qty > stock) {
          alert(`Quantity yang diminta ${qty}, melebihi jumlah stock ${stock}`);
        } else {
          cart.push({ name, price, qty });

          products[selIndex].stock -= qty;

          break;
        }
      }

      const cartList = createlist(cart, "Keranjang", 0);

      const again = prompt(
        `${cartList}\n\nIngin belanjang lagi ? ( ya / tidak )`
      );

      if (again.toLowerCase() == "tidak") {
        break;
      }
    }

    // Hitung Belanja

    let finalPrice = 0;

    cart.forEach((val) => {
      val.total = val.price * val.qty;

      finalPrice += val.total;
    });

    let finalReport = "";

    // cart.forEach((val) => {
    //   finalReport += `${val[0]} : ${val[1]} * ${val[2]} = ${val[3]} \n`;
    // });

    cart.forEach((val) => {
      const { name, price, qty, total } = val;
      finalReport += `${name} : ${price} * ${qty} = ${total}  \n `;
    });

    while (true) {
      const money = parseInt(
        prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`)
      );

      const margin = Math.abs(money - finalPrice);

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

        cart = [{}];

        break;
      }
    }
  } else {
    break;
  }
}

/////////////////////////
// Exercise - Date Object
/////////////////////////

// const time = new Date();

// const year = time.getFullYear();

// const month = time.getMonth();

// const date = time.getDate();

// const day = time.getDay();

// const hours = time.getHours();

// const minutes = time.getMinutes();

// const months = [
//   "Januari",
//   "Februari",
//   "Maret",
//   "April",
//   "Mei",
//   "Juni",
//   "Juli",
//   "Agustus",
//   "September",
//   "Oktober",
//   "November",
//   "Desember",
// ];

// console.log(`Saat ini bulan ${month + 1} : ${months[month]} Tahun ${year}`);

///////////////////////////
// Exercise - Data Object 2
///////////////////////////

// const timeFunction = () => {
//   const time = new Date();

//   const year = time.getFullYear();

//   const month = time.getMonth();

//   const date = time.getDate();

//   const day = time.getDay();

//   const hours = time.getHours();

//   const minutes = time.getMinutes();

//   const seconds = time.getSeconds();

//   const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

//   const months = [
//     "Januari",
//     "Februari",
//     "Maret",
//     "April",
//     "Mei",
//     "Juni",
//     "Juli",
//     "Agustus",
//     "September",
//     "Oktober",
//     "November",
//     "Desember",
//   ];

//   return {
//     hari: days[day],
//     tanggal: date,
//     bulan: months[month],
//     tahun: year,
//     jam: hours,
//     menit: minutes,
//     detik: seconds,
//   };
// };

// let { hari, tanggal, bulan, tahun, jam, menit, detik } = timeFunction();

// if (menit < 10) {
//   menit = `0${menit}`;
// } else if (detik < 10) {
//   detik = `0${detik}`;
// }

// console.log(
//   `Hari ini ${hari}, ${tanggal} ${bulan} ${tahun}, Pukul ${jam}:${menit}:${detik}`
// );
