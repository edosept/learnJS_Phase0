/*
  Requirements:
    1. Apabila masukan berupa array kosong nilai balikan dari fungsi adalah "Belum ada data masuk"
    2. Melakukan mapping salary dengan rules sebagai berikut:
      a. Apabila salary >= 10 Juta maka salaryGroup = A
      b. Apabila salary >= 5 juta maka salaryGroup = B
      c. Selain itu maka bernilai C
    3. Menambah field code dengan ketentuan sebagai berikut:
      nama code diambil dari field "job" dari huruf initial pertama dengan huruf kapital pada masing-masing kata
      contoh apabila job berupa: "ceo" maka code akan menjadi "C"
      apabila job terdiri dari dua kata seperti "general manager" maka code akan menjadi "GM"

*/

function parsingData(input) {

  if (input.length === 0) {
    return "Belum ada data masuk";
  }
  const result = input.map((el) => {
    if (el.salary >= 10000000) {
      el.salaryGroup = "A"
    } else if (el.salary >= 5000000) {
      el.salaryGroup = "B"
    } else if (el.salary > 0) {
      el.salaryGroup = "C"
    }

    el.code = el.job.split(" ").map((el) => el[0].toUpperCase()).join("");
    return el
  })
  return result
}

console.log(parsingData([
  {
    id: 1,
    name: "Rama",
    job: "developer",
    salary: 10000000
  },
  {
    id: 2,
    name: "Ihsan",
    job: "product manager",
    salary: 4000000
  },
  {
    id: 3,
    name: "Edo",
    job: "advisor",
    salary: 9000000
  },
  {
    id: 4,
    name: "Naufal",
    job: "researcher specialist",
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
//     salaryGroup: 'A',
//     code: 'D'
//   },
//   {
//     id: 2,
//     name: 'Ihsan',
//     job: 'product manager',
//     salary: 4000000,
//     salaryGroup: 'C',
//     code: 'PM'
//   },
//   {
//     id: 3,
//     name: 'Edo',
//     job: 'advisor',
//     salary: 9000000,
//     salaryGroup: 'B',
//     code: 'A'
//   },
//   {
//     id: 4,
//     name: 'Naufal',
//     job: 'researcher specialist',
//     salary: 7500000,
//     salaryGroup: 'B',
//     code: 'RS'
//   }
// ]

console.log(parsingData([]));
// output: Belum ada data masuk