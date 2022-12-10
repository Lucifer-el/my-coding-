var cal = require('readline-sync');
console.log('--------------------')
console.log('pertambahan = +')
console.log('pengurangan = -')
console.log('pembagian = /')
console.log('perkalian = x')
console.log('--------------------')
var c = cal.question('pilih metode =')

if (c == '+') { 
var jumlah = cal.questionInt('input bilangan pertama = ');
var jumlah2 = cal.questionInt('input bilangan kedua = ');
var jum = jumlah;
var jum2 = jumlah2;
var hasilJum = jum + jum2
console.log("hasil = " + hasilJum); 
} if (c == '-') { 
    var minus = cal.questionInt('input bilangan pertama = ');
    var minus2 = cal.questionInt('input bilangan kedua = ');
    var min = minus;
    var min2 = minus2;
    var hasilMin2 = min - min2
    console.log("hasil = " +hasilMin2) 
}if (c == '/') { 
    var bagi = cal.questionInt('input bilangan pertama = ');
    var bagi2 = cal.questionInt('input bilangan kedua = ');
    var bagi = bagi;
    var bagi2 = bagi2;
    var hasil3 = bagi / bagi2;
      console.log("hasil = " +hasil3) 
}if (c == '*') { 
    var kali = cal.questionInt('input bilangan pertama = ');
    var kali2 = cal.questionInt('input bilangan kedua = ');
    var kali = kali;
    var kali2 = kali2;
    var hasil4 = kali * kali2;
        console.log("hasil = " +hasil4) }
