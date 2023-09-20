/*
    ?Sorular
    1-Türkçe 40 ---4 puan
    2- Matematik 40 
    3-Sosyal Bilimler 20
    4- Fen Bilimleri 20

    ----> 100 puanı Ösym Veriyor
    ----> Okul puanı max 60 veriyor

*/

let TurkceDogru, TurkceYanlis = 0;
let MatematikDogru , MatematikYanlis = 0;
let SosyalDogru , SosyalYanlis = 0;
let FenDogru , FenYanlis = 0;
let puan = 0;
let okulPuanı = 0;  

let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplamasına Hoş Geldiniz.." +yeniSatir
+ "1-Puan Hesapla" + yeniSatir
+ "2 -Çıkış Yap";

// alert(mesaj);

let secim = prompt(mesaj);

switch (secim) {
    case "1":
        okulPuanı = Number(prompt("Okul puanınızı Giriniz"));

        TurkceDogru = Number(prompt("Türkçe Doğru Sayisi"));
        TurkceYanlis = Number(prompt("Türkçe Yanlıs Sayısı"));

        MatematikDogru = Number(prompt("Matematik Doğru Sayisi"));
        MatematikYanlis = Number(prompt("Matematik Yanlıs Sayısı"));

        SosyalDogru = Number(prompt("Sosyal Doğru Sayisi"));
        SosyalYanlis = Number(prompt("Sosyal Yanlıs Sayısı"));

        FenDogru = Number(prompt("Fen Doğru Sayisi"));
        FenYanlis = Number(prompt("Fen Yanlıs Sayısı"));
       
        let dogruSayisi = TurkceDogru+MatematikDogru+FenDogru+SosyalDogru;
        let yanlısSayisi = TurkceYanlis+MatematikYanlis+FenYanlis+SosyalYanlis;
        let kalanDogruSayisi = dogruSayisi -(yanlısSayisi/4);
        puan = (kalanDogruSayisi*4) + 100 + okulPuanı ;
        alert("TYT Puanınız: " + puan);
        break;
    case "2":
        alert("Uygulamadan Cıkıs Yapıldı...");
        break;
    default:
        alert("Lütfen Geçerli Aralıkta Değer Giriniz!");
        break;
}