//Soal No. 1 (Array to Object)
const arrayToObject = (arr) => {
  let now = new Date();
  let thisYear = now.getFullYear();
  const arrObj = {};
 
  if (arr.length == "") {
    console.log("");
  } else {
    for (let i = 0; i < 2; i++) {
      arrobj = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: thisYear - arr[i][3],
      };
      if (arrobj.age <= 0 || !arrobj.age) {
        arrobj.age = "Invalid Birth Year!";
      }
      console.log(`${i + 1}. ${arrobj.firstName} : {
        firstName : ${arrobj.firstName},
        lastName : ${arrobj.lastName},
        gender : ${arrobj.gender},
        age : ${arrobj.age}}`);
    }
  }
  return arr;
};

// Driver Code
const people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);
console.log(people);

const people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people2);

// Error case
arrayToObject([]);

//Soal No. 2 (Shopping Time)
const shoppingTime = (memberId, money) => {
  const barang = {
    "Sepatu brand Stacattu": 1500000,
    "Baju brand Zoro": 500000,
    "Baju brand H&N": 250000,
    "Sweater brand Uniklooh": 175000,
    "Casing Handphone": 50000,
  };

  let arrHargaBarang = Object.values(barang);
 
  let sortedHargaBarang = arrHargaBarang.sort((a, b) => {
    return b - a;
  });

  if (memberId == null || memberId == "") {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else {
    barangDibeli = [];
    change = money;
    for (var i = 0; i < arrHargaBarang.length; i++) {
      if (change >= sortedHargaBarang[i]) {
        barangDibeli.push(
          Object.keys(barang)[
            Object.values(barang).indexOf(sortedHargaBarang[i])
          ]
        );
        change -= sortedHargaBarang[i];
      }
    }
    object = {
      memberId: memberId,
      money: money,
      listPurchased: barangDibeli,
      changeMoney: change,
    };
    return object;
  }
};

console.log(shoppingTime("1820RzKrnWn08", 2475000));
console.log(shoppingTime("82Ku8Ma742", 170000));
console.log(shoppingTime("", 2475000));
console.log(shoppingTime("234JdhweRxa53", 15000));
console.log(shoppingTime());

//SOAL NOMOR 3
function naikAngkot(arrPenumpang) {
  const rute = ["A", "B", "C", "D", "E", "F"];
  const x = [];

  if (Array.isArray(arrPenumpang) && arrPenumpang.length) {
    for (let i = 0; i < arrPenumpang.length; i++) {
      let b = rute.indexOf(arrPenumpang[i][1]);
      let t = rute.indexOf(arrPenumpang[i][2]);
      let bayar = t * 2000 - b * 2000;
      x[i] = {
        penumpang: arrPenumpang[i][0],
        naikDari: arrPenumpang[i][1],
        tujuan: arrPenumpang[i][2],
        bayar: bayar,
      };
    }
  }
  return x;
}

console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
console.log(naikAngkot([]));
