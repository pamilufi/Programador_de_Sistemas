import { carro } from "../lib/lista3.js";

console.log(carro)
while (carro1.velocidade < 80) acelerar(carro1);
console.log(carro1)
while (carro1.velocidade > 59) frear(carro1);
console.log(carro1)
while (carro1.velocidade > 0) frear(carro1);
console.log(carro1)

while (carro2.velocidade < 110) acelerar(carro2);
console.log(carro2)
while (carro2.velocidade > 80) frear(carro2);
console.log(carro2)
while (carro2.velocidade < 110) acelerar(carro2);
console.log(carro2)
while (carro2.velocidade > 0) frear(carro2);
console.log(carro2)

console.table([carro1,carro2]); 
