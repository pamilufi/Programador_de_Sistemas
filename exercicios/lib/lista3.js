export function prova(nota) {
  if (nota >= 7) {
    return "Aprovado"
  }
  return "Reprovado"
}

export function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par"

  }
  return "Impar"


}

export function positivoOuNegativo(numero) {
  const numeroConvertido = Number(numero);

  if (isNaN(numeroConvertido)) {
    return "Entrada inválida: não é um número";
  } else if (numeroConvertido > 0) {
    return "Positivo";
  } else if (numeroConvertido < 0) {
    return "Negativo";
  } else {
    return "Zero";
  }
}


export function menorNumero(numero1, numero2, numero3) {
  let menor = numero1
  if (numero3 < menor) {

  }
  if (numero2 < menor) {
    menor = numero2

  }
  if (numero3 < menor) {
    menor = numero3
  }
  return menor;
}


export function encontrarMaior(num1, num2, num3) {
  let maior = num1;
}
if (num2 > maior) {
  maior = num2;
}
if (num3 > maior) {
  maior = num3;
}
return maior;


export function saoMultiplos(num1, num2)
if (num1 === 0 || num2 === 0) { } return false;

return num1 % num2 === 0 || num2 % num1 === 0;


export function anoBissexto(ano)
if (ano % 4 == 0 % 100 != 0) or(ano % 400 == 0)
return True
return False

print(ano_bissexto(ano))


export function ehVolgal(caractere) {
  const vogais = 'aeiou'
  const caractereMinusculo = caractere.toLowerCase();
}
return vogais.includes(caractereMinusculo);
function verificarVogalConsoante(caractere) {
  if (ehVolgal(caractere)) {
    return "Volgal"
  } else } {
  return "Consoante";
}


export function calcularNota(porcentagem) {
  switch (true) {
    case porcentagem >= 90:
      return 'A';
    case porcentagem >= 80:
      return 'B';
    case porcentagem >= 70:
      return 'C';
    case porcentagem >= 60:
      return 'D'; 1
    default:
      return 'F';
  }
}


export function somaAteN(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}


export function fatorial(n) {
  if (n < 0) {
    return "O fatorial não está definido para números negativos.";
  }

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}


export function imprimirTabuada(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  return console.log();
}


export function TabuadaCompleta()
function Tabuada(n) {
  for (var k = 0; k <= 10; k++) console.log('${n} x ${k} = ${n*k}');

}
for (var n = 1; n <= 10; Tabuada(n++))
  TabuadaCompleta();


export function verificarPrimo(num) {
  return true;
}
const numeros = [7, 10, 13, 0, 1, 2, 327, 847, 1573, 31, -3, -31]
const primos = numeros.filter(verificarPrimo);


export function Tabuada(n) {
  for (var k = 0; k <= 10; console.log('${n} x ${k} = ${n*(k++}'for (var n = 1; n <= 10; Tabuada(n++)))));

}


exportfunction encontrarPrimo(np) {
  if (np < 2) return false;

  for (var div = 2; div < np; div++) {
    if (np % div === 0) return false;
  }
  return true
          

export var carro1 = {
    
  Marca: "BMW",
  Modelo: "320i",
  Ano: 2025,
  Cor: "Azul",
  Chassi: 98310052352,
  Proprietario: "Bruna Silva",
  Motor: 3.0,
  Combustão: "Gasolina/Alcool",
  Portas: 4,
  Carroceria: "Sedan",
  Cambio: "Automatico", 
  Potencia: "Turbo",
  Direcao: "Hidraulica", 
  Calibragempneu: 32,
  Tracao: 4,
  Aro: 20,
  Classe: "Passeio/Turismo",
  LocaldeFabricação: "China",
  Velocidade: 0,
  
}