let tombolBeliElement = document.getElementById("tombol-beli");
let stokDisplayElement = document.getElementById("stok-display");

const STOK_AWAL = 10;
let jumlahKlik = 0;

tombolBeliElement.addEventListener("click", function(){
    if(stokSisa >= STOK_AWAL){
        alert("stok habis");
        return;
    }

    jumlahKlik++;
    let stokSisa = STOK_AWAL - jumlahKlik;

    stokDisplayElement.innerText = "stok sisa : " + stokSisa;
    tombolBeliElement.innerText = "Dibeli (" + jumlahKlik + ")x";
    alert("produkberhasil dibeli");
}); 