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


export function encontrarMaior (num1,num2,num3){
let maior = num1; 
}
if (num2 > maior){
  maior = num2;
}
if (num3 > maior){
  maior = num3;
} 
return maior;
