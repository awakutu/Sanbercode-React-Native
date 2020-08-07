// No.1
const teriak = () => {
  return "Hello Sanbers!";
};
console.log(teriak());

// No.2
const kalikan = (num1, num2) => {
  return num1 * num2;
};

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// No.3
const introduce = (name, age, address, hobby) => {
  let result = `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
  return result;
};

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
