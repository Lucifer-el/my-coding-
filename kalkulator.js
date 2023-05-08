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
var hasilJum = jumlah + jumlah2
console.log("hasil = " + hasilJum); 
} if (c == '-') { 
    var minus = cal.questionInt('input bilangan pertama = ');
    var minus2 = cal.questionInt('input bilangan kedua = ');
    var hasilMin2 = minus - minus2
    console.log("hasil = " +hasilMin2) 
}if (c == '/') { 
    var bagi = cal.questionInt('input bilangan pertama = ');
    var bagi2 = cal.questionInt('input bilangan kedua = ');
    var hasil3 = bagi / bagi2;
      console.log("hasil = " +hasil3) 
}if (c == '*') { 
    var kali = cal.questionInt('input bilangan pertama = ');
    var kali2 = cal.questionInt('input bilangan kedua = ');
    var hasil4 = kali * kali2;
        console.log("hasil = " +hasil4) }
