// Menerima input dari user berupa angka
var input = prompt("Silahkan masukan angka berarpun:");
// Change tipe data string to integer
input = parseInt(input);
// Input from user di pangkat dua, hasilnya disimpen ke variable result
var result = Math.pow(input, 2);

alert(`Kuadrat dari ${input} = ${result}`);
