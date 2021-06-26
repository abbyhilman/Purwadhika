///////////////
// Syntax Array
///////////////

// var things = ["books", "pen", "clock"];

// console.log(things);

// var random = [23, "Michael", true, 3.14];

//////////////
// Access Data
//////////////

// index dimulai dari 0
// untuk melihat posisi index dari array menggunakan console.table

// console.table(random);

/////////////
//Change Data
/////////////

// var things = ["books", "pen", "clock"];

// console.table(things);

// things[0] = "paper";

// things[2] = "shoes";

// console.table(things);

///////////////////
// Create New Index
///////////////////

// var things = ["books", "pen", "clock"];

// things[3] = "shoes";

// console.table(things);

// things[5] = "try";

// console.log(things);

//////////////////
// Length of Array
//////////////////

// console.log(`Length dari array things : ${things.length}`);

////////////////////
// Method Push & Pop
////////////////////

// var things = ["books", "pen", "clock"];
// Menambahkan data array
// things.push("jacket");
// Menghapus array mulai dari index paling belakang
// things.pop();

// console.log(things);

//////////////////
// unshift : Menambahkan value pada index pertama
// shift : Menghapus value pada index pertama
//////////////////

// var things = ["books", "pen", "clock"];

// things.unshift("jacket");

// things.shift();

// console.log(things);

//////////////////////////////////////////
// SPLICE : Menghapus dan Menambahkan data
//////////////////////////////////////////

/*
    Syntax

    array.splice(index, amount)

    index: index awal dimulainya operasi (mengahapus)
    amount: jumlah data yang ingin dihapus dari 'index'

*/

// var things = ["books", "pen", "clock", "paper"];

// things.splice(1, 2);

// things = ["books", "pen", "clock", "paper"];

// things.splice(0, 3);

// things.splice(1, 1);

// console.log(things);

/////////////////////////
// Case: Menambahkan Data
/////////////////////////

// var things = ["books", "pen", "clock", "paper"];

// things.splice(2, 0, "pencil");

// things.splice(4, 0, "magazine", 1987);

// console.log(things);

////////////////////////////////////////
// Case : Menambahkan dan Menghapus Data
////////////////////////////////////////

// var things = ["books", "pen", "clock", "paper"];

// things.splice(1, 2, "door", "cabel");

// console.table(things);

//////////////////////////////////////////////////////////////
// Delete : Menghapus data, dan indexnya akan berisi undefined
//////////////////////////////////////////////////////////////

// var things = ["books", "pen", "clock", "paper"];

// delete things[0];

// console.log(things[0]);

///////////////////////////////
// Slice: copy value dari array
///////////////////////////////

/*
    
    Syntax

    array.slice(start index, end index)

    start index: index awal dari data yang akan di copy
    end index: index akhir dari data yang akan dicopy (tidak termasuk)


*/

// var fruits = ["apple", "banana", "cherry", "lemon", "watermelon"];
// console.table(fruits);

// var fruitSlice = fruits.slice(2, 3);

// var banCheMon = fruits.slice(2);

// kenapa jika memasukan index 2 di slice meanampilkan 3 jenis buah tetapi kalo 4 hanya 1 yaitu watermelon

// agit@192 Session_05 % node index.js
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │    0    │   'cherry'   │
// │    1    │   'lemon'    │
// │    2    │ 'watermelon' │
// └─────────┴──────────────┘
// agit@192 Session_05 % node index.js
// ┌─────────┬──────────────┐
// │ (index) │    Values    │
// ├─────────┼──────────────┤
// │    0    │ 'watermelon' │

// console.table(banCheMon);

////////////////////////////////////////////////////////////////////
// INCLUDES : Memeriksa apakah suatu array mengandung value tertentu
////////////////////////////////////////////////////////////////////

// var colors = ["black", "gray", "white", "red", "green", "blue"];

// console.log(colors.includes("pink"));

/////////////////////////////////////////////////////
// INDEXOF : Mencari index dari suatu data pada array
/////////////////////////////////////////////////////

// var colors = ["black", "grey", "white", "red", "green", "blue"];

// var idxRed = colors.indexOf("red");

// console.log(idxRed);

//////////////////////////////////////////////////////////////////////
// SORT : Mengurutkan data pada array secara ascending (0 - 9 / a - z)
//////////////////////////////////////////////////////////////////////

// var things = ["pen", "book", "pencil", "shoes", "table"];

// things.sort();

// console.table(things);

///////////////////////////////////////////////
// REVERSE : Membalikkan urutan data pada array
///////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"];

// days.reverse();

// console.table(days);

///////////////////////////////////////////////////////////////
// JOIN : Menggabungkan data pda array dengan karakter tertentu
///////////////////////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"];

// var joinDash = days.join(" - ");

// var joinComa = days.join(", ");

// var joinSpace = days.join(" ");

// var joinAnd = days.join(" and ");

// console.log(joinAnd);

////////////////////////////////////////////////////////
// CONCAT : Menggabungkan data dari dua array atau lebih
////////////////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"];
// var animals = ["anoa", "dragon", "cameleon", "bird"];
// var fruits = ["apple", "banana", "cherry", "lemon"];

// var dayFruits = days.concat(fruits);
// console.table(dayFruits);

// var fruitAnim = fruits.concat(animals);
// console.table(fruitAnim);

// var allOfThem = days.concat(animals, fruits);
// console.table(allOfThem);

///////////////////////////////////
// ARRAY 2 D : Array di dalam array
///////////////////////////////////

// var things = [
//   ["red pen", "blue pen"],
//   ["analog clock", "digital clock"],
//   ["futsal shoes", "badminton shoes"],
// ];

// console.log(things[0][1]);

// var things = [
//   ["red pen", "blue pen"], //   ["analog clock", "digital clock"],
//   ["futsal shoes", "badminton shoes"],
// ];

// things.push(["apple", "banana"]);

// console.table(things);

// var things = [
//   ["red pen", "blue pen"],
//   ["analog clock", "digital clock"],
//   ["futsal shoes", "badminton shoes"],
// ];

// things[0][2] = "blue pen";

// console.log(things);

/////////////////////////////////////////////////////////////////////////////
// LOOP WITH ARRAY : Melakukan looping untuk memproses setiap data pada array
/////////////////////////////////////////////////////////////////////////////

// var categories = ["Horror", "Sci-fi", "Thriller", "Adventure", "Animation"];

// var listCat = "Terdapat 5 kategori film :\n";

// for (var i = 0; i < 5; i++) {
//   listCat += categories[i] + "\n";
// }

// console.log(listCat);
