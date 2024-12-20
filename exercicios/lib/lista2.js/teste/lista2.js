export function escreverOlaMundo() {
    document.write("Olá, mundo!");
}

export function saudacao() {
    let nome = prompt("Digite seu nome:");
    alert("Olá, " + Bruna + "!");
}

export function somar(num1, num2) {
    // Convertendo os valores para números, caso sejam strings
    let resultado = Number(num1) + Number(num2);
    return resultado;
}

// Exemplos de uso:
let soma1 = somar(4, 5);
let soma2 = somar(10, 15);
let soma3 = somar("-3", "7");

export function multiplicar(num1, num2) {
    let resultado = num1 * num2;
}
return resultado


export function calcularMedia(num1, num2, num3) {
    let soma = Number(num1) + Number(num2) + Number(num3);
    let media = soma / 3;
    return media;
}
let media1 = calcularMedia(10, 20, 30);
let media2 = calcularMedia(5, 15, 25);
