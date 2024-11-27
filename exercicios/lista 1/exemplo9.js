
var Fusca = {
    
    marca:"VW",
    modelo: "Fusca",
    ano: 1959,
    classe: "Passeio" ,
    cor: "Preta",
    cambio: "manual 6 marcha",
    direçao: "Hidraulica",
    velocidade: 0,
    calibragem: { dianteiro: 32, traseiro: 32, step: 36}
}

function acelerar(carro){
    carro.velocidade += 5;   
}
function frear(carro){
    Fusca.velocidade -=13;

    if(carro.velocidade < 0){
        carro.velocidade = 0;
    }
    
}
while(Fusca.velocidade < 80)acelerar(Fusca);
console.log(Fusca);
while(Fusca.velocidade >= 60 )frear();
console.log(Fusca);
while(Fusca.velocidade > 0 )frear();
console.log(Fusca);
console.table(Fusca);



