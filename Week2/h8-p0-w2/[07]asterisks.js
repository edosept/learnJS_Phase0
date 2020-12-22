/* 1. Menyusun Barisan Bintang
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'. */

// for(var row = 1; row <= 5; row++) {
//   console.log('*')
// }

let rows = 5;
let star = 1;
while(star <= rows){
  console.log('*');
  star++;
}

/* 2. Menyusun Barisan Bintang Dengan Nested Looping
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini. */

// for (var row = 1; row <= 1; row++)
// {
//     for (var star = 1; star <= 5; star++)
//     {
//         if (star >= row)
//         {
//             console.log('*****');
//         }
//         else
//         {
//             console.log('');
//         }
//     }
// }

let counter1 = 1;
let stars = 5;
while(counter1 <= stars){
  let counter2 = 1;
  let star = '';
  while(counter2 <= stars){
    star += '*';
    counter2++;
  }
  console.log(star);
  counter1++;
}

/* 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini. */

// for (var row = 1; row <= 1; row++)
// {
//     for (var star = 1; star <= 5; star++)
//     {
//         if (star >= row)
//         {
//             console.log('*'.repeat(star));
//         }
//         else
//         {
//             console.log('');
//         }
//     }
// }

let stars = 0;
let row = 5;
while (stars <= row) {
  let star = '';
  let countSpace = row - stars - 1 ;
  while (countSpace > 0) {
    countSpace --;
  }
  let countStar = 1;
  while (countStar <= stars) {
    star += '*';
    countStar++;
  }
  console.log(star);
  stars++;
}



