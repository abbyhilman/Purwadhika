penjumlahan = (number1, number2) => {
  return `Penjumlahan ${number1} dan ${number2} adalah ${number1 + number2}`;
};
pengurangan = (number1, number2) => {
  return `Pengurangan ${number1} dan ${number2} adalah ${number1 - number2}`;
};

module.exports = {
  penjumlahan,
  pengurangan,
};
