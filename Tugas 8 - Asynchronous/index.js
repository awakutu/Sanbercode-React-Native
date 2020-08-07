// di index.js
const readBooks = require("./callback.js");

const books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

jmlBuku = books.length;
index = 0;
time = 10000;

const render = (time, index, jmlBuku) => {
  readBooks(time, books[index], (siswaWaktu) => {
    waktu = siswaWaktu;
    jmlBuku = jmlBuku - 1;
    if (jmlBuku > 0) {
      render(waktu, index + 1, jmlBuku);
    }
  });
};

render(time, index, jmlBuku);
