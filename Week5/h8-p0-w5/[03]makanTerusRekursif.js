/* Logic Challenge - Makan Terus (Rekursif)
Problem
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis. Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis .Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. Function akan memproses jika waktu masih ada. Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan. Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1 

*/

function makanTerusRekursif(waktu) {
    // inisialisasi variabel penghitung pesanan costumer dengan angka awal 0;
    var count = 0;
    
    // kondisi apabila waktu telah habis akan mengembalikan nilai 0
    if (waktu === 0) {
        return count;
    } else if (waktu > 0 && waktu <= 15) { // apabila waktu masih tersisa kurang dari sama dengan 15 menit, maka akan mengembalikan nilai 1
        return 1;
    } else { // selain dari itu akan menambahkan nilai 1 setiap pemesanan dan mengurangi waktu sebanyak 15 menit
        count += 1;
        return count + makanTerusRekursif(waktu-15);
    }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0