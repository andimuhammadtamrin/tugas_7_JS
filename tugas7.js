var tinggibadan = [161,163,162,172,171,
                  167,165,169,169,170];

//untuk for-off
console.log("Menggunakan for-off");
for(let x of tinggibadan){
  console.log(x);
}
console.log("");
console.log("");
// untuk pengulangan array biasa
console.log("menggunakan metode biasa");
for(var i=0 ; i<tinggibadan.length;i++){
  console.log(tinggibadan[i]);
}
// Berdasarkan hasil running kedua metode, tampak
// hasil terlihat sama akan tetapi dalam proses pengolahan
// nilai arraynya, pada metode for-of ditampung pada variable x dan
// dirunning di dalam variable tersebut lalu di tampilkan  sedangkan pada metode
// biasa ,nilai array langsung dihitung menggunakan length dan dirunning
// dengan  variable tinggibadan+((i) untuk nilai array).Jadi
// Menurut saya mungkin perbedaan terdapat pada kecepatan merunning datanya,
// mungking metode biasa lebih cepat di tampilkan hasilya dari pada metode for-off
// yang harus menampung nilai array dulu kedalam variable x  sebelum di running.  
