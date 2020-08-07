//Soal No. 1 (Range)
const range = (startNum, finishNum) => {
  let store = [];
  if (startNum <= finishNum) {
    for (startNum; startNum <= finishNum; startNum++) {
      store = [...store, startNum];
    }
    return store;
  } else if (startNum >= finishNum) {
    for (startNum; startNum >= finishNum; startNum--) {
      store = [...store, startNum];
    }
    return store;
  } else {
    return -1;
  }
};

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11, 18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range()); // -1

// Soal No. 2 (Range with Step)
const rangeWithStep = (startNum, finishNum, step) => {
  let store = [];
  if (startNum < finishNum) {
    for (startNum; startNum <= finishNum; startNum += step) {
      store = [...store, startNum];
    }
    return store;
  } else if (startNum > finishNum) {
    for (startNum; startNum >= finishNum; startNum -= step) {
      store = [...store, startNum];
    }
    return store;
  } else {
    return -1;
  }
};

console.log(rangeWithStep(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)); // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)); // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)); // [29, 25, 21, 17, 13, 9, 5]

const sum = (deretAwal, deretAkhir, step) => {
  let sub = 0;
  step = step || 1;
  if (deretAwal && deretAkhir) {
    if (deretAwal < deretAkhir) {
      for (deretAwal; deretAwal <= deretAkhir; deretAwal += step) {
        sub = sub + deretAwal;
      }
      return sub;
    } else {
      for (deretAwal; deretAwal >= deretAkhir; deretAwal -= step) {
        sub = sub + deretAwal;
      }
      return sub;
    }
  } else {
    if (deretAwal || deretAkhir) {
      return 1;
    } else {
      return 0;
    }
  }
};

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0

// Soal No. 4 (Array Multidimensi)
const dataHandling = (input) => {
  let store = [];

  input.map((x) => {
    store = [
      ...store,
      `Nomor ID:  ${x[0]}\n`,
      `Nama Lengkap:  ${x[1]}\n`,
      `TTL:  ${x[2]} ${x[3]}\n`,
      `Hobi: ${x[4]}\n\n`,
    ];
  });

  let parse = store.join("");

  return parse;
};

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
// console.log(dataHandling(input));

//Soal No. 5 (Balik Kata)
const balikKata = (input) => {
  let store = "";
  for (let i = input.length; i >= 0; i--) {
    store = `${store}${input.charAt(i)}`;
  }
  return store;
};

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I

// Soal No. 6 (Metode Array)

var input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

const dataHandling2 = (data) => {
  let input = data;
  data.splice(4, 0, "Pria", "SMA Internasional Metro");
  data.splice(1, 1, "Roman Alamsyah Elsharawy");
  data.splice(2, 1, "Provinsi Bandar Lampung");
  let irisan = data.slice(0, data.length - 1);

  let splitYear = irisan[3].split("/");
  let year  = [splitYear[2],splitYear[0],splitYear[1]]; 
  let month;

  switch (splitYear[1]) {
    case "01":
      month = "Januari";
      break;
    case "02":
      month = "Februari";
      break;
    case "03":
      month = "Maret";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "Mei";
      break;
    case "06":
      month = "Juni";
      break;
    case "07":
      month = "Juli";
      break;
    case "08":
      month = "Agustus";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "Oktober";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "Desember";
      break;

    default:
      break;
  }

  let yearStrip = splitYear.join("-");
  let finalName = "Roman Alamsyah";

  console.log(irisan);
  console.log(month);
  console.log(year);
  console.log(yearStrip);
  console.log(finalName);
};

dataHandling2(input);
