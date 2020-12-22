/* 1. Melakukan Looping Menggunakan While
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'. */

var loop1 = 0;

console.log('LOOPING PERTAMA')
while(loop1 < 20 ){
  loop1+=2;
  console.log(loop1 + ' - I love coding');
}

var loop2 = 22;

console.log('LOOPING KEDUA')
while(loop2 > 2 ){
  loop2-=2;
  console.log(loop2 + ' - I will become fullstack developer');
}

/* 2. Melakukan Looping Menggunakan For
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'. */

console.log('LOOPING PERTAMA FOR')
for(var angka = 1; angka <= 20; angka++) {
  console.log(angka + ' - I love coding');
}

console.log('LOOPING KEDUA FOR')
for(var angka = 20; angka > 0; angka--) {
  console.log(angka + ' - I will become fullstack developer');
}

/* 3. Angka Ganjil dan Genap
Hint: kamu akan menggunakan kondisional juga di kasus ini.

Problem
1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
2. Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL */

for(var angka = 1; angka <= 100; angka++) {
  if ((angka%2)==1) {
    console.log('counter sekarang = ' + angka + ', GANJIL');
  }
  else if ((angka%2)==0) {
    console.log('counter sekarang = ' + angka + ', GENAP');
  }
}

/*
3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
4. Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3" dan seterusnya. */

console.log('pertambahan counter 2')
for(var angka = 1; angka <= 100; angka+=2) {
  if (angka%3 == 0) {
    console.log('counter sekarang = ' + angka + ', KELIPATAN 3');
  }
  else {
    console.log('counter sekarang = ' + angka + '');
  }
}

console.log('pertambahan counter 5')
for(var angka = 1; angka <= 100; angka+=5) {
  if (angka%6 == 0) {
    console.log('counter sekarang = ' + angka + ', KELIPATAN 6');
  }
  else {
    console.log('counter sekarang = ' + angka + '');
  }
}

console.log('pertambahan counter 9')
for(var angka = 1; angka <= 100; angka+=9) {
  if (angka%10 == 0) {
    console.log('counter sekarang = ' + angka + ', KELIPATAN 10');
  }
  else {
    console.log('counter sekarang = ' + angka + '');
  }
}


