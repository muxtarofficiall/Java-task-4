///1)Array icinde en boyuk ededi tapin:
//let numbers = [1, 3, 5, 6];
//let enBöyük = Math.max(...numbers);
//console.log("En büyük sayı: " + enBöyük);


///2.Array icinde sade ededleri tap:
//let numbers = [1, 3, 5, 7, 9, 2, 8, 6, 4, 13, 41, 44];
//let sadeEdedler = numbers.filter(sayi => sayi % 2 !== 0 );
//console.log("Sade ededler: " + sadeEdedler);


///3. Arrayda uzunlugu 7 olan sozleri ekrana cixardin:
// let data = [
 //  "Salam",
 // "Dünyalı",
 // "JavaScript",  
  //"Programlaşdırma",  
// "Kod",   
 //"Frontend",
//"Backend",];
//let uzunluguYeddiOlanSözlər = data.filter(söz => söz.length === 7);
//console.log(uzunluguYeddiOlanSözlər);


/// 4.Ucbucagin 2 terefini daxil edin. Hipetonuzu hesablayin (Arrow function):
    // const hipotenuzuHesapla = (a, b) => Math.sqrt(a**2 + b**2);
//const a = 6;
//const b = 8;
//const hipotenuz = hipotenuzuHesapla(a, b);
//console.log("Hipotenuz: " + hipotenuz);



///5.İstifadeciden kilosunu ve boyunu isteyin. Daha sonra onun Bədən kütlə indeksini tapın.(kilo / boy ** 2). Tapilan bmi deyerine gore usere asagidaki sekilde mesaj verin:
//const kilo = parseFloat(prompt("Zəhmət olmasa (kg) girin:"));
//const boy = parseFloat(prompt("Zəhmət olmasa (cm) girin:"));

//const bedenKutleIndeksi = kilo / (boy ** 2);

//let mesaj = "";

//if (bedenKutleIndeksi < 18) {
    //mesaj = "İdeal çəkidən aşağı";
//} else if (bedenKutleIndeksi >= 18 && bedenKutleIndeksi < 25) {
    //mesaj = "İdeal çəki";
//} else if (bedenKutleIndeksi >= 25 && bedenKutleIndeksi < 30) {
    //mesaj = "İdeal çəkidən yuxarı";
//} else if (bedenKutleIndeksi >= 30 && bedenKutleIndeksi < 40) {
    //mesaj = "Artıq çəki (obez)";
//} else {
    //mesaj = "Artıq çəki (morbid dərəcədə piylənmə)";
//}

//console.log("Bədən kütlə indeksiniz: " + bedenKutleIndeksi.toFixed(1));
//console.log("Nəticə: " + mesaj);



///Userin daxil etdiyi qiymetin (Ela (100-90), Yaxsi(90-75), Orta(75-55), , Pis(55-35), Kafi(35-0)) oldugunu yoxlayin:
//let point = +prompt("Qiymətinizi daxil edin (0 - 100):");

//if (point >= 90 && point <= 100) {
    //console.log("Ela");
//} else if (point >= 75 && point < 90) {
    //console.log("Yaxşı");
//} else if (point >= 55 && point < 75) {
    //console.log("Orta");
//} else if (point >= 35 && point < 55) {
    //console.log("Pis");
//} else if (point >= 0 && point < 35) {
    //console.log("Kafi");
//} else {
    //console.log("Düzgün bir qiymət girmədiniz.");
//}
let user = {
Name:"Namiq",
Soyad:"Ceferli",
Age:24,
id:2,
}
console.log(user)
let user1 = {
Name:"Namiq",
Soyad:"Ceferli",
Age:24,
id:3,
}
console.log(user1)
let user2 = {
    Name:"Namiq",
    Soyad:"Ceferli",
    Age:24,
    id:4,
    }
    console.log(user2)
    let users =[
        {
            Name:"Namiq",
            Soyad:"Ceferli",
            Age:24,
            id:2,  
        },
        {
            Name:"Namiq",
            Soyad:"Ceferli",
            Age:24,
            id:4,
            },
            {
                Name:"Namiq",
                Soyad:"Ceferli",
                Age:24,
                id:3,
                },
    ]
    let users1 =[
        {
            Name:"Namiq",
            Soyad:"Ceferli",
            Age:24,
            id:2,  
        },
        {
            Name:"Namiq",
            Soyad:"Ceferli",
            Age:24,
            id:4,
            },
            {
                Name:"Namiq",
                Soyad:"Ceferli",
                Age:24,
                id:3,
                },
    ]
    console.log(users1)
   Array.map( a=> {
    console.log(a.Name)
   })