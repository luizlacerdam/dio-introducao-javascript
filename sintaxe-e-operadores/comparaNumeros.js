let val1 = Number(prompt('primeiro valor?'));
let val2 = Number(prompt('segundo valor?'));
let text1 = null;
let text2 = null;

if (val1 == val2) {
	text1 = 'Os numeros num1 e num2 sao iguais. ';
} else {
	text1 = 'Os numeros num1 e num2 nao sao iguais. ';
}

let sum = val1 + val2;

if (sum < 10 ) {
	text2 = 'Sua soma e menor que 10 e menor que 20.';
}
if (sum > 10 && sum < 20) {
	text2 = 'Sua soma e maior que 10 e menor que 20.';
}
if (sum > 20) {
	text2 = 'Sua soma e maior que 20.';
}

console.log(text1 + text2);