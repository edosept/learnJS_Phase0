/* Logic Challenge - Faktor Persekutuan Terbesar
Problem
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut. */

function fpb(angka1, angka2) {
  let result = [];
  let smaller, bigger;
  if (angka1 <= angka2) {
    smaller = angka1;
  } else {
    smaller = angka2;
  }
  if (angka1 >= angka2) {
    bigger = angka1;
  } else {
    bigger = angka2;
  }
  for (let i = 1; i < smaller; i++) {
    if (smaller % i == 0 && bigger % i == 0) {
      result.push(i);
    }
  }
  return Math.max(...result);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1