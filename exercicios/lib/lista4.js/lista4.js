export var str = "";


export const list1 = [1, 2, 3, 4, 5]
// console.log(list1.indexOf(3));

const list2 = [10, 20, 30, 40, 50]
// console.log(list2.indexOf(20));

const list3 = [5, 10, 15, 20, 25]
//   console.log(list3.indexOf(25));

const list4 = [5, 10, 15, 20, 25]
//   console.log(list4.indexOf(30));

export const array1 = [1, 2, 3, 4, 5];
console.log(array1.includes(3));

const array2 = [10, 20, 30, 40, 50];
console.log(array2.includes(25));

const array3 = [100, 200, 300];
console.log(array3.includes(100));

export var ultimo1 = [1, 2, 3, 4, 5];
var ultimo1Pop = ultimo1.pop();

var ultimo2 = ["a", "b", "c"];
var ultimo2Pop = ultimo2.pop();

var ultimo3 = [10];
var ultimo3Pop = ultimo3.pop();

var ultimo4 = [];
var ultimo4Pop = ultimo4.pop();


export const array1 = [1, 2, 3, 4, 5];
const firstElement = array1.shift();

const array2 = ["a", "b", "c"];
const firstElement2 = array2.shift();

const array3 = [10];
const firstElement3 = array3.shift();

const array4 = [];
const firstElement4 = array4.shift();

export var arr = [1, 2, 3, 4, 5]


export var numeros = [1, 2, 3, 4, 5];
numeros.push(6);


export const array9 = [1, 2, 3];
const array8 = [4, 5, 6];
const array7 = array9.concat(array2);

const arraya = ["a", "b"];
const arrayb = ["c", "d"];
const arrayc = arraya.concat(arrayb);

const a1 = [];
const b2 = [1, 2, 3];
const c3 = a1.concat(b2);

const aa1 = [1, 2, 3];
const bb2 = [];
const cc3 = aa1.concat(bb2);

const d1 = [];
const d2 = [];
const d3 = d1.concat(d2);

export const lista = [2, 4, 6, 8]
function soma(a, b) {
    return a + b;
}

const total = lista.reduce(soma, 0);


export function somaPares(arr) {
    return arr.filter(num => num % 2 === 0)
        .reduce((soma, num) => soma + num, 0);
}

export function calcularMedia(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma / arr.length;
}

export function somaDosDigitos(num) {
    let soma = 0;
    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        soma += parseInt(numStr[i], 10);
    }

    return soma;
}


export function maiorNumero(arr) {
    if (arr.length === 0) {
        return -Infinity;
    }
    return Math.max(...arr);
}


export function removerEspacos(str) {
    return str.replace(/\s+/g, '');
}


export function Palindromo(str) {

    let str1 = str.toLowerCase().replace();

    let str2 = str1.split('').reverse().join('');

    return str1 === str2;
}


export function Numeros(str) {
    return !isNaN(str);
}

export function contar(str) {

    let vogais = str.toLowerCase().match(/[aeiou]/g);
    
    return vogais ? vogais.length : 0;
}


export var palavra = "listen"
var palavra2 = "silent"

function Anagrama(texto1,texto2){
    caabe = texto1.split('').sort().join('')
    maca = texto2.split('').sort().join('')
return caabe === maca
}
