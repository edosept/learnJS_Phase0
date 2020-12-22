/*
Directions
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:

var hari = 21; var bulan = 1; var tahun = 1945;

Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
*/

let hari = 1;
let bulan = 5;
let tahun = 1945;
let result = ``;

switch(bulan) {
  case 1  : { result = `${hari} Januari ${tahun}`;
  break; }
  case 2  : { result = `${hari} Februari ${tahun}`;
  break; }
  case 3  : { result = `${hari} Maret ${tahun}`;
  break;  }
  case 4  : { result = `${hari} April ${tahun}`;
  break; }
  case 5  : { result = `${hari} Mei ${tahun}`;
  break;  }
  case 6  : { result = `${hari} Juni ${tahun}`;
  break;  }
  case 7  : { result = `${hari} Juli ${tahun}`;
  break;  }
  case 8  : { result = `${hari} Agustus ${tahun}`;
  break;  }
  case 9  : { result = `${hari} September ${tahun}`;
  break;  }
  case 10 : { result = `${hari} Oktober ${tahun}`;
  break;  }
  case 11 : { result = `${hari} November ${tahun}`;
  break;  }
  case 12 : { result = `${hari} Desember ${tahun}`;
  break;  }
  default:  { console.log ("Bulan tidak tersedia");
  break; }

}
console.log(result);