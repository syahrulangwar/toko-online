/*  hanya berfungsi untuk 1 data dan tidak effisien jika banyak data

let tombolBeliElement = document.getElementById("tombol-beli");
let stokDisplayElement = document.getElementById("stok-display");

const STOK_AWAL = 10;
let jumlahKlik = 0;

tombolBeliElement.addEventListener("click", function(){
    if(jumlahKlik >= STOK_AWAL){
        alert("sorry stoknya habis kak");
        return;
    }

    jumlahKlik++;
    let stokSisa = STOK_AWAL - jumlahKlik;

    stokDisplayElement.innerText = "stok sisa : " + stokSisa;
    alert("sudah masuk keranjang");
}); */

// sebuah simulasi database menggunakan array
// lebih effisien untuk banyak data sekaligus
const DAFTAR_PRODUK = [
    {
        id: 1,
        nama: "laptop gaming",
        harga: 10000,
        stok: 2
    },

    {
        id: 2,
        nama: "laptop sultan",
        harga: 50000,
        stok: 5
    },

    {
        id: 3,
        nama: "laptop murah",
        harga: 1000,
        stok: 1
    },

    {
        id: 4,
        nama: "laptop keren",
        harga: 10000,
        stok: 5
    },
];

// membuat fungsi untuk mencari produk berdasarkan id
function beliProduk(idProduk){
    const produk = DAFTAR_PRODUK.find(p => p.id === idProduk);

    if(!produk){
        alert("Maaf, produk tidak ditemukan");
        return;
    }

    if(produk.stok <= 0){
        alert("Produk " + produk.nama + " sudah habis");
        return;
    }

    // otomatis mengurangi stok array
    produk.stok--;
    alert("Berhasil masuk ke keranjang");

    //mengambil data berdasarkan id dan mengubah nya sesuai dengan stok di array
    const stokDisplayElement = document.getElementById("stok-" + idProduk);
    stokDisplayElement.innerText = "stok sisa : " + produk.stok;
}
