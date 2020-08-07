// No.1 Looping while
const whileLoop = () => {
  let i = 2;
  let j = 20;
  let result = "";
  let result2 = "";
  while (i <= 20) {
    word = "LOOPING PERTAMA\n";
    result += i + " - I love coding\n";
    i = i + 2;
    if (j <= 20) words = "LOOPING KEDUA\n";
    result2 += j + " I will become a mobile developer\n";
    j = j - 2;
  }
  return word + result + words + result2;
};
console.log(whileLoop());

// No. 2 Looping menggunakan for
const forLoop = () => {
  let result = "";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
      if (i % 2 === 1 && i % 3 === 0) {
        result += i + " - I Love Coding\n";
      } else {
        result += i + " - Santai\n";
      }
    } else if (i % 2 === 0) {
      result += i + " - Berkualitas\n";
    }
  }
  return result;
};
console.log(forLoop());

//No. 3 Membuat Persegi Panjang #
const persegiPanjangloop = () => {
  let result = "";
  let i = 1;
  while (i <= 4) {
    let j = 1;
    while (j <= 8) {
      result += "#";
      j++;
    }
    result += "\n";
    i++;
  }
  return result;
};
console.log(persegiPanjangloop());

// No. 4 Membuat Tangga
const tanggaLoop = () => {
  let result = "";
  let i = 1;
  while (i <= 7) {
    let j = 1;
    while (j <= i) {
      result += "#";
      j++;
    }
    result += "\n";
    i++;
  }
  return result;
};
console.log(tanggaLoop());

const papanCaturLoop = () => {
  let result = "";
  let height = 8;
  let width = 8;

  for (let y = 0; y < height; y++) {
    if (y > 0) result += "\n";
    for (let x = 0; x < width; x++) {
      if ((x + y) % 2 == 0) {
        result += " ";
      } else {
        result += "#";
      }
    }
  }
  return result;
};
console.log(papanCaturLoop());