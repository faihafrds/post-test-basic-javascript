//soal 3 a.
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(){
    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value;
    let luas1 = 1/2 * alas *tinggi;
    document.getElementById('luas1').value = luas1;
})

//soal 3 b.
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function(){
    let jari2 = document.getElementById('jari2').value;
    const phi = 22/7;
    let luas2 = phi * jari2 *jari2;
    document.getElementById('luas2').value = luas2;
})

//soal 3 c.
let biodata = {
    namaLengkap: "Annisa",
    namaPanggilan: "Icha",
    TTL: {
        tempat: "Jakarta",
        tanggalLahir: "30 Februari 2000"
    },
    sekolah: "Universitas Kehidupan",
    hobi: ["belajar","bermain","bernyanyi"]
}

console.log(biodata.namaLengkap)
console.log(biodata.namaPanggilan)
console.log(biodata.TTL.tempat)
console.log(biodata.TTL["tanggalLahir"])
console.log(biodata["sekolah"])
console.log(biodata["hobi"][0])
console.log(biodata["hobi"][1])
console.log(biodata.hobi[2])

//soal 3 d.
let angka = [12,23,34,45,56]

angka.forEach(function(i){
    console.log(i)
})