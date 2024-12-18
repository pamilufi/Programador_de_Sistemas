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

export function positivoOuNegativo (numero) {
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
