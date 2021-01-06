/* Logic Challenge - Password Generator
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga */

function changeVocals (str) {
    let strVocals = str;
    let strChangeVocals = '';
    let strReversed = '';
    
    let i = 0;
    
    for (i; i < strVocals.length; i++) {
            switch (strVocals[i]) {
            case 'a': { strChangeVocals += 'b'; break; } 
            case 'i': { strChangeVocals += 'j'; break; }
            case 'u': { strChangeVocals += 'v'; break; }
            case 'e': { strChangeVocals += 'f'; break; }
            case 'o': { strChangeVocals += 'p'; break; }
            case 'A': { strChangeVocals += 'B'; break; } 
            case 'I': { strChangeVocals += 'J'; break; }
            case 'U': { strChangeVocals += 'V'; break; }
            case 'E': { strChangeVocals += 'F'; break; }
            case 'O': { strChangeVocals += 'P'; break; }
            default: {  strChangeVocals += strVocals[i]; }
            }
    }
    
    strReversed = reverseWord(strChangeVocals);
    return strReversed;
}

function reverseWord (str) {
    let strUnreverse = str;
    let i = strUnreverse.length-1;
    let strReversed = '';
    let strCaseChange = '';
    
    for (i; i >= 0; i--) {
        strReversed += strUnreverse[i];
    }

    strCaseChange = setLowerUpperCase(strReversed);
    return strCaseChange;
}

function setLowerUpperCase (str) {
  let kalimat = str;

  var lowAbjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var upAbjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var indexAbjad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  
  var i = 0;
  
  var resultOfTransform = [];
  
  function isItLowercase(huruf) {
    for (let i = 0; i < lowAbjad.length; i++) {
        if (huruf === lowAbjad[i]) {
            return true;
        }
    }
  }
  
  function isItUppercase(huruf) {
    for (let i = 0; i < upAbjad.length; i++) {
        if (huruf === upAbjad[i]) {
            return true;
        }
    }
  }
  
  // Mengambil huruf dari panjang array kalimat dan melakukan pengecekan up/low case
  for (i; i < kalimat.length; i++) {
      // find indexAbjad of kalimat[i]
      var character = kalimat[i];
      //console.log(character);
      if (isItUppercase(character) === true) {
          // check indeks abjad
          for (var j = 0; j < upAbjad.length; j++) {
              if (character === upAbjad[j]) {
                  // transform to lowercase
                  resultOfTransform.push(lowAbjad[j]);
              }        
          }
      } else if (isItLowercase(character) === true) {
          for (var k = 0; k < lowAbjad.length; k++) {
              if (character === lowAbjad[k]) {
                  // transform to uppercase
                  resultOfTransform.push(upAbjad[k]);
              }
          }
      } else { // mengembalikan nilai kalimat[i] sesuai nilai asal
          resultOfTransform.push(kalimat[i]);
      }
    }
    
    // merubah array result To String ke dalam bentuk STRING
    var resToString = resultOfTransform.toString();
    var finalResult = '';
    
    // membuang setiap tanda koma hasil dari transform array ke string
    for (var m = 0; m < resToString.length; m++) {
        if (resToString[m] !== ',') {
            finalResult += resToString[m];
        }
    }
    
    // mengembalikan hasil, remove spasi
    let strNoSpaces = removeSpaces(finalResult);
    return strNoSpaces;
}

function removeSpaces (str) {
    let strRemovedSpace = str;
    let i = 0;
    let strFinalResult = '';
    
    for (i; i < strRemovedSpace.length; i++) {
        //console.log(strRemovedSpace[i]);
        if (strRemovedSpace[i] === ' ') {
            //strFinalResult += strRemovedSpace[i];
        } else {
            strFinalResult += strRemovedSpace[i];
        }
    }
    
    return strFinalResult;
}

function passwordGenerator (name) {
    let password = '';
    
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        password = changeVocals(name);
        return password;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'