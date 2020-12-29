/* Logic Challenge - Naik Angkot
Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }] */

function naikAngkot(arrPenumpang) {
  if (arrPenumpang.length === 0) return arrPenumpang
  
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'] // 0, 1, 2, 3, 4, 5 || 1 - 5
  let objKey = ['penumpang', 'naikDari', 'tujuan', 'bayar']
  let arrOfObj = []

  for (let i = 0; i < arrPenumpang.length; i++) {
    // console.log(arrPenumpang[i]) // [ 'Dimitri', 'B', 'F' ] [ 'Icha', 'A', 'B' ]
    let obj = {}
    for (let j = 0; j < arrPenumpang[i].length; j++) {
      // console.log(arrPenumpang[i][j]) // Dimitri B F etc..
      obj[objKey[j]] = arrPenumpang[i][j] 
      // { bayar: 0, penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F' }
    }
    arrOfObj.push(obj)
  }

  for (let i = 0; i < arrOfObj.length; i++) {
    // arrOfObj[i].naikDari // B
    let a = 0
    let b = 0
    for (let j in rute) {
      if (arrOfObj[i].naikDari === rute[j]) {
        a = j
      } else if (arrOfObj[i].tujuan === rute[j]) {
        b = j
      }
    }
    arrOfObj[i].bayar = (b - a) * 2000
  }
  return arrOfObj
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]