/* Logic Challenge - Most Frequent Largest Numbers
Problem
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers! */

function sorting(arrNumber) {
    var numberSorted = arrNumber;
    
    // Get the highest value
    // Sort the numbers in the array in descending order
    for (i = 0; i < numberSorted.length; i++) {
        var num1 = numberSorted[i];
        var num2 = numberSorted[i+1];
        numberSorted.sort(function (num1, num2) { return num2 - num1 }); 
    }
    
    return numberSorted;
}

function getTotal(arrNumber) {
    var highestNumber = 0;
    var countHighestNumber = 0;
    
    if (arrNumber.length === 0) {
        return '';
    } else {
        // The first item in the array (points[0]) is now the highest value
        highestNumber = arrNumber[0];
        
        countHighestNumber = 1;
        
        // iteration to find a value equal to highestNumber and add 1 every time it occurs
        for (var j = 1; j < arrNumber.length; j++) {
            if (arrNumber[j] === highestNumber) {
                countHighestNumber += 1;
            } else {
                break;
            }
        }
    }
    
    return 'angka paling besar adalah '+highestNumber+' dan jumlah kemunculan sebanyak '+countHighestNumber+' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
