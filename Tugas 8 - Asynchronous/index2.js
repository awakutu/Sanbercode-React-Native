const readBooksPromise = require("./promise.js");

const books = [
  {
    name: "LOTR",
    timeSpent: 3000,
  },
  {
    name: "Fidas",
    timeSpent: 2000,
  },
  {
    name: "Kalkulus",
    timeSpent: 4000,
  },
];

jmlBuku = books.length;
index = 0;
time = 10000;

const render = (time, index, jmlBuku) => {
  readBooksPromise(time, books[index])
    .then((waktuSisa) => {
      time = waktuSisa;
      jmlBuku = jmlBuku - 1;
      if (waktuSisa > 0) {
        render(time, index + 1, jmlBuku);
      }
    })
    .catch((error) => {
      console.log(`Mengalami kesalahan ${error}`);
    });
};

render(time, index, jmlBuku);
