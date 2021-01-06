/* Logic Challenge: Melee Ranged Grouping
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong */

function meleeRangedGrouping (str) {
  let result = [];
  if (!str) return result;
  let splitStr = str.split(',');
  let splitGroup = [];
  let rangedType = [];
  let meleeType = [];

  for (let i = 0; i < splitStr.length; i++) {
    splitGroup.push(splitStr[i].split('-'))
  }

  for (let j = 0; j < splitGroup.length; j++) {
    if (splitGroup[j][1] === 'Melee') {
      meleeType.push(splitGroup[j][0])
    } else if (splitGroup[j][1] === 'Ranged') {
      rangedType.push(splitGroup[j][0])
    }
  }

  result.push(rangedType, meleeType)
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []