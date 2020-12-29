/* Logic Challenge - Tukar Besar Kecil
Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan. */

function tukarBesarKecil(kalimat) {
  let arrKalimat = kalimat.split("");
  let result = [];
  for (let i = 0; i < arrKalimat.length; i++) { // charCodeAt() use ASCII code
    if (arrKalimat[i].charCodeAt() >= 65 && arrKalimat[i].charCodeAt() <= 90)
    	// >= 65 <= 90 is a latin capital letter A-Z
    {
      result.push(arrKalimat[i].toLowerCase());
    } else if (arrKalimat[i].charCodeAt() >= 97 && arrKalimat[i].charCodeAt() <= 122) // >= 97 <= 122 is a latin small letter a-z
    {
      result.push(arrKalimat[i].toUpperCase());
    } else {
      result.push(arrKalimat[i]);
    }
  }
  return result.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"