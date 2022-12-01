var cal = require('readline-sync');
var a = cal.questionInt('input bilangan pertama =');
var b = cal.questionInt('input bilangan kedua =');

console.log('--------------------')
console.log('pertambahan = +')
console.log('pengurangan = -')
console.log('pembagian = /')
console.log('perkalian = x')
console.log('--------------------')
var c = cal.question('pilih metode =')

if (c=='+')
{console.log(a+b)}
else {
  if (c=='-')
  {console.log(a-b)}
 
}
