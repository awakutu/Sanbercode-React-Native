// if-else
var nama = "John";
var peran = "";

if ((nama === "") & (peran === "")) {
  console.log(`Nama harus diisi!`);
} else if (nama === "John" && peran === "") {
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (nama === "Jane" && peran === "Penyihir") {
  console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
  console.log(
    `Halo ${peran} ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`
  );
} else if (nama === "Jenita" && peran === "Guard") {
  console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
  console.log(
    `Halo ${peran} ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf`
  );
} else if (nama === "Junaedi" && peran === "Werewolf") {
  console.log(`Selamat datang di Dunia Werewolf, ${nama}`);
  console.log(`Halo ${peran} ${nama}, kamu akan memakan mangsa setiap malam!`);
}

// Switch Case
var tanggal = 21;
var bulan = 1;
var tahun = 1945;

switch ((tanggal, bulan, tahun)) {
  case (21, 1, 1945):
    console.log(`21 Januari 1945`);
    break;
}
