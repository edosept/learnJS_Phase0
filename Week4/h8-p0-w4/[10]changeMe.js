/* Logic Challenge - Change Me!
Problem
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 } */

function changeMe(arr) {
  let results = [];
  let keyName = ['firstName', 'lastName', 'gender', 'age'];

  if (arr.length === 0) {console.log(arr)};

  for (let i = 0; i < arr.length; i++) {
    let obj = {};

    if(arr[i][3] !== undefined) {
      arr[i][3] = new Date().getFullYear() - arr[i][3];
    } else {
      arr[i][3] = 'Invalid Birth Year';
    }
    for (let j = 0; j < 4; j++) {
      obj[keyName[j]] = arr[i][j];
    }
    results.push(obj);
  }

  for(let i = 0; i < results.length; i++) {
    console.log((i + 1) + '. ' + results[i].firstName + results[i].lastName + ':');
    console.log(results[i]);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""