/*
  Requirements:
    1. Mengubah data input yang mengandung missing value pada field tertentu menjadi "Field belum terisi"
    2. Apabila masukan berupa array kosong nilai balikan dari fungsi adalah "Belum ada data masuk"
    3. Field yang diakomodir pada fungsi berupa id, name, job, salary dan summary
*/

function removeMissingField(input) {

  if (input.length === 0) {
    return "Belum ada data masuk";
  }
  let fields = {};
  for (let key in input[0]) {
    fields[key] = true
  }

  const result = input.map((el) => {
    for (const key in fields) {
      if (!el[key]) {
        el[key] = "Field belum terisi";
      }
    }
    return el
  })

  return result
}

console.log(removeMissingField([
  {
    id: 1,
    name: "Rama",
    job: "developer",
    salary: 10000000,
    summary: "Hello world"
  },
  {
    id: 2,
    name: "Ihsan",
    salary: 9000000
  },
  {
    id: 3,
    name: "Edo",
    job: "advisor",
    summary: "Latihan nodejs"
  },
  {
    id: 4,
    name: "Naufal",
    job: "researcher",
    salary: 7500000
  }
]))

// Output
// [
//   {
//     id: 1,
//     name: 'rama',
//     job: 'developer',
//     salary: 10000000,
//     summary: 'Hello world'
//   },
//   {
//     id: 2,
//     name: 'Ihsan',
//     salary: 9000000,
//     job: 'Field belum terisi',
//     summary: 'Field belum terisi'
//   },
//   {
//     id: 3,
//     name: 'Edo',
//     job: 'advisor',
//     summary: 'Latihan nodejs',
//     salary: 'Field belum terisi'
//   },
//   {
//     id: 4,
//     name: 'Naufal',
//     job: 'researcher',
//     salary: 7500000,
//     summary: 'Field belum terisi'
//   }
// ]


console.log(removeMissingField([]));
// output: Belum ada data masuk