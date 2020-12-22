/*
Directions
Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

Hints
Variabel tetap di-input secara manual.
Variabel nama dan peran dapat diisi apa saja.
Nama tidak perlu dicek sama persis seperti contoh input/output
Buat If-Else berbeda masing-masing untuk mengecek peran
 */

let nama = 'Bokir';
let peran = 'Tabib';
let peran1 = '';

if (nama === '') {
  console.log('Nama harus diisi!');
} else {
  if (peran === 'Ksatria') {
    peran1 = peran;
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran1} ${nama}, kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === 'Tabib'){
    peran1 = peran;
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran1} ${nama}, kamu akan membantu temanmu yang terluka.`);
  } else if (peran === 'Penyihir') {
    peran1 = peran;
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran1} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
  } else { console.log('Pilih peranmu untuk memulai game! Ksatria, Tabib, atau Penyihir');}
}