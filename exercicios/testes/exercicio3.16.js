import { encontrarPrimo } from "../lib/lista3.js";

console.log(encontrarPrimo(7));   //true
console.log(encontrarPrimo(10));  //false
console.log(encontrarPrimo(13));  //true
console.log(encontrarPrimo(0));   //false
console.log(encontrarPrimo(1));   //false
console.log(encontrarPrimo(2));   //true
console.log('----------------');
console.log(encontrarPrimo(327)); //false  
console.log(encontrarPrimo(847)); //false 
console.log(encontrarPrimo(1573)); //false  
console.log(encontrarPrimo(31));  //true
console.log(encontrarPrimo(-3));   //false
console.log(encontrarPrimo(-31));   //false