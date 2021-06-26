// Exercise 1

// var words = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

// words.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   }
// });

// console.log(words);

// Output : [ 'Elena', 'Dany', 'Chaplin', 'Bernard', 'Alex' ]

// Exercise 2

// Change number to string with array

// If bilangnan ganjil menjadi odd if bilangan genap menjadi even

// const numbers = [22, 17, 19, 20, 14];

// const numResult = numbers.map((number) => {
//   if (number % 2 == 1) {
//     return "odd";
//   } else {
//     return "even";
//   }
// });

// console.log(numResult);

// Output : [ 'even', 'odd', 'odd', 'even', 'even' ]

// Exercise 3

// Filter Gaji Pegawai

// const salaryEmployee = [9100000, 9800000, 9500000, 10300000, 9300000];

// const salaryResult = salaryEmployee.filter((salary) => {
//   return salary - salary * 0.05 > 9000000;
// });

// console.log(salaryResult);

// OutPut : [ 9800000, 9500000, 10300000 ]

// Exercise 4

// Fibonacci Sequence

// const number = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// const fibonacci = (p) => {
//   if (p < 3) {
//     return 1;
//   } else {
//     return fibonacci(p - 1) + fibonacci(p - 2);
//   }
// };

// const fiboResult = fibonacci(7);

// Fibonacci untuk di p nya apakah hanya  kurang dari 3

// console.log(fiboResult);
// Exercise 5

/* Sebuah kaliamat yang dibaca sama walau dari arah terbalik (dari belakang) dengan mengabaikan karakter selain
huruf */

// Palindrome

// Regular Expression (RegEx)

// let word = "ababcas! s";

// console.log(word.replace(/[^a-z]/g, ""));

// const palindrome = (word) => {
//   // 1. diubah menjadi lower case
//   const wordLower = word.toLowerCase();
//   // 2. Hapus selain huruf
//   const wordClean = wordLower.replace(/[^a-z]/g, "");
//   // 3. Ubah Menjadi array
//   const wordArr = wordClean.split("");
//   // 4. Mengubah urutannya (reverse)
//   wordArr.reverse();
//   // 5. Ubah Menjadi satu string
//   const wordJoined = wordArr.join("");

//   const isSame = wordClean == wordJoined;

//   return `${word} : ${isSame}`;
// };

// console.log(palindrome("Madam I'm Adam"));

// let word = "Madam I'm Adam";

// let wordClean = word.toLowerCase().replace(/[^a-z]/g, "");

// let wordReversed = wordClean.split("").reverse().join("");

// let isSame = wordClean == wordReversed;
// console.log(`${word} : ${isSame}`);

// Output : Madam I'm Adam : true

// Exercise 6

// Reverse Words

// Hai Aku Joan Mir

// const word = "Hai Aku Joan Mir";

// const reverseString = (str) => {
//   //   let splitString = str.split("");

//   //   let reverseArray = splitString.reverse();

//   //   let joinArr = reverseArray.join("");

//   return `Before : ${word} After : ${str
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .reverse()
//     .join(" ")}`;

//   //   return `Before : ${word} After : ${str.split("").reverse().join("")}`;
// };

// console.log(reverseString(word));

// Cara kedua
// const reverseWords = (word) => {
//   // ["Hai", "aku", "Joan", "Mir"]
//   return word
//     .split(" ")
//     .map((val) => {
//       val = val.split("").reverse().join("");

//       return val;
//     })
//     .join(" ");
// };

// console.log(reverseWords(word));

// Output = Before : Hai Aku Joan Mir After : iaH ukA naoJ riM

// Exercise 7

// Caesar Cipher ('Sunday Six', 2)

// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// const caesarChiper = (word, shift) => {
//   // word : "Abc Yz"
//   // shift : 2

//   // words : ["Abc", "Yz"]
//   const words = word.split(" ");

//   // wordsResult = ["Cde", "Ab"]
//   const wordsResult = words.map((word) => {
//     // word : "Abc"
//     // wordSplitted : ["a", "b", "c"]
//     const wordSplitted = word.toLowerCase().split("");

//     // wordShifted = [ "c", "d", "e" ]
//     const wordShifted = wordSplitted.map((word) => {
//       // word : "a"

//       // next index = (index + shift) % length
//       const nextIndex = (alphabet.indexOf(word) + shift) % alphabet.length;

//       // nextIndex = 2
//       return alphabet[nextIndex];
//     });

//     // wordShifted = [ "C", "d", "e" ]
//     wordShifted[0] = wordShifted[0].toUpperCase();

//     // retur "Cde"
//     return wordShifted.join("");
//   });

//   // wordsResult = "Cde Ab"
//   return wordsResult.join(" ");
// };

// console.log(caesarChiper("Abc Yz", 2));
// console.log(caesarChiper("Sunday Six", 2));

// Exercise 8

// Mean, Median, mode

// const mean = (numbers) => {
//   var total = 0,
//     i;
//   for (i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//   }
//   return total / numbers.length;
// };

// // alternative mean/average method (from https://www.30secondsofcode.org/snippet/average):
// // const mean = (...numbers) =>
// //   numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

// const meanResult = mean([1, 2, 3, 2, 5, 2, 7, 2]); // 2
// console.log(`Mean = ${meanResult}`);
// mean(...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 5
// mean([1, 2, 3]); // 2

// const median = (numbers) => {
//   // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
//   var median = 0,
//     numsLen = numbers.length;
//   numbers.sort();

//   if (
//     numsLen % 2 ===
//     0 // is even
//   ) {
//     // average of two middle numbers
//     median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
//   } else {
//     // is odd
//     // middle number only
//     median = numbers[(numsLen - 1) / 2];
//   }

//   return median;
// }

// const medianResult = median([1, 2, 3, 2, 5, 2, 7, 2]);
// console.log(`Median = ${medianResult}`);

// const mode = (numbers) => {
//   // as result can be bimodal or multi-modal,
//   // the returned result is provided as an array
//   // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
//   var modes = [],
//     count = [],
//     i,
//     number,
//     maxIndex = 0;

//   for (i = 0; i < numbers.length; i += 1) {
//     number = numbers[i];
//     count[number] = (count[number] || 0) + 1;
//     if (count[number] > maxIndex) {
//       maxIndex = count[number];
//     }
//   }

//   for (i in count)
//     if (count.hasOwnProperty(i)) {
//       if (count[i] === maxIndex) {
//         modes.push(Number(i));
//       }
//     }

//   return modes;
// };

// const modesResult = mode([1, 2, 3, 2, 5, 2, 7, 2]);
// console.log(`Mode = ${modesResult}`);

// Output
// Mean = 3
// Median = 2
// Mode = 2

// Sample #2

const numbers = [1, 1, 3, 1, 5, 2, 7, 2];

const mode = (number) => {
  number.sort();

  var obj = {};
  var output = [];
  var maxOutput = 0;

  numbers.forEach((val) => {
    if (obj[val] == undefined) {
      obj[val] = 0;
      obj[val]++;
    } else {
      obj[val]++;
    }
  });

  for (var key in obj) {
    if (obj[key] > maxOutput) {
      maxOutput = obj[key];
      if (maxOutput > 1) {
        output.push(key);
      }
    }
  }

  return output;
};

var modesResult = mode(numbers);
console.log(`Mode : ${modesResult}`);

// Exercise 9

// Market V1.5

// var fruits = [
//   ["Apple", 10000, 5],
//   ["Grape", 15000, 7],
//   ["Orange", 20000, 8],
// ];

// var cart = [];

// var listProduct = (fruit) => {
//   var fruitlist = `Daftar buah \n\n`;

//   fruit.forEach((val, index) => {
//     fruitlist += `${index}. ${val[0]} || Rp. ${val[1]} || ${val[2]}  \n `;
//   });

//   alert(fruitlist);
// };

// while (true) {
//   var menu = parseInt(
//     prompt(`
//         Apa yang ingin anda lakukan :
//         1. Menampilkan daftar buah
//         2. Menambah buah
//         3. Menghapus buah
//         4. Membeli buah
//         5. Exit
//       `)
//   );

//   if (menu == 1) {
//     listProduct(fruits);
//   } else if (menu == 2) {
//     var newName = prompt("Masukkan nama buah :");
//     var newPrice = parseInt(prompt("Masukkan jumlah harga satuan :"));
//     var newStock = parseInt(prompt("Masukkan jumlah stock :"));

//     var newFruit = [newName, newPrice, newStock];

//     fruits.push(newFruit);

//     listProduct(fruits);
//   } else if (menu == 3) {
//     var fruitlist = `Mengapus buah \n\n`;

//     fruits.forEach((val, index) => {
//       fruitlist += `${index}. ${val[0]} || Rp. ${val[1]} || ${val[2]}  \n `;
//     });

//     var selIndex = parseInt(prompt(fruitlist));

//     fruits.splice(selIndex, 1);

//     listProduct(fruits);
//   } else if (menu == 4) {
//     while (true) {
//       var fruitlist = `Membeli buah \n\n`;

//       fruits.forEach((val, index) => {
//         fruitlist += `${index}. ${val[0]} || Rp. ${val[1]} || ${val[2]}  \n `;
//       });

//       var selIndex = parseInt(prompt(fruitlist));

//       var selName = fruits[selIndex][0];
//       var selPrice = fruits[selIndex][1];
//       var selStock = fruits[selIndex][2];

//       while (true) {
//         var selQty = parseInt(
//           prompt(`Masukkan quatity untuk ${selName}, Stock : ${selPrice}`)
//         );

//         if (selQty > selStock) {
//           alert(
//             `Quantity yang diminta ${selQty}, melebihi jumlah stock ${selStock}`
//           );
//         } else {
//           cart.push([selName, selPrice, selQty]);

//           fruits[selIndex][2] -= selQty;

//           break;
//         }
//       }

//       var cartList = `Keranjang \n\n`;

//       cart.forEach((val, index) => {
//         cartList += `${index}. ${val[0]} || Rp. ${val[1]} || ${val[2]}  \n `;
//       });

//       var again = prompt(
//         `${cartList}\n\nIngin belanjang lagi ? ( ya / tidak )`
//       );

//       if (again == "tidak") {
//         break;
//       }
//     }

//     // Hitung Belanja

//     var finalPrice = 0;

//     cart.forEach((val) => {
//       val[3] = val[1] * val[2];

//       finalPrice += val[3];
//     });

//     var finalReport = "";

//     // for (var i = 0; i < cart.length; i++) {
//     //   finalReport += `${cart[i][0]} : ${cart[i][1]} * ${cart[i][2]} = ${cart[i][3]} \n`;
//     // }

//     cart.forEach((val) => {
//       finalReport += `${val[0]} : ${val[1]} * ${val[2]} = ${val[3]} \n`;
//     });

//     while (true) {
//       var money = parseInt(
//         prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`)
//       );

//       var margin = Math.abs(money - finalPrice);

//       if (money < finalPrice) {
//         alert(
//           `Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`
//         );
//       } else {
//         if (money > finalPrice) {
//           alert(`Terima kasih, uang kembali anda ${margin}`);
//         } else {
//           alert(`Terima kasih telah membeli`);
//         }

//         cart = [];

//         break;
//       }
//     }
//   } else {
//     break;
//   }
// }
