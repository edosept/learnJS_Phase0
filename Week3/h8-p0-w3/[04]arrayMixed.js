/* Directions
//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
Format tanggal pada data adalah dd-mm-YYYY
Misal angka bulan 01, tuliskan "Januari"
Gunakan switch case untuk menuliskan bulan di atas.
Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Test-case
Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

 function dataHandling2(bioArr){
  const newBioArr = bioArr;
  newBioArr.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  newBioArr.splice(4,1, "Pria", "SMA Internasional Metro");
  
  const name = newBioArr[1];
  const month = newBioArr[3].split("/")[1]
  const dateArr = newBioArr[3].split("/")
  dateArr.sort(function(a, b) {
    return b-a
  });
  const dateString = newBioArr[3].split("/").join("-")
  
  switch(parseInt(month)){
    case 01:
      monthName = 'Januari';
      break;
    case 02:
      monthName = 'Febuari';
      break;
    case 03:
      monthName = 'Maret';
      break;
    case 04:
      monthName = 'April';
      break;
    case 05:
      monthName = 'Mei';
      break;
    case 06:
      monthName = 'Juni';
      break;
    case 07:
      monthName = 'Juli';
      break;
    case 08:
      monthName = 'Agustus';
      break;
    case 09:
      monthName = 'September';
      break;
    case 10:
      monthName = 'Oktober';
      break;
    case 11:
      monthName = 'November';
      break;
    case 12:
      monthName = 'Desember';
      break;
    default:
      monthName = "Tidak ada bulan yang lebih dari 12";
      break;
  };
  
  console.log(newBioArr);
  console.log(monthName);
  console.log(dateArr);
  console.log(dateString);
  console.log(name);
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

