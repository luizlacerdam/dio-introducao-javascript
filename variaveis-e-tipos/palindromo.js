var word = "ama";
//solucao 1
var poly = 0;
if(word.length % 2 == 0) {
	let check = (word.length - 1) / 2;
	for(let i = 0; i < check; i++){
		if(word[i] == word[word.length - i - 1]) {
			poly += 0;
		} else {
			poly += 1;
		}
	}
} else {
	check = word.length / 2;
	for(i = 0; i < check; i++){
		if(word[i] == word[word.length - i - 1]) {
			poly += 0;
		} else {
			poly += 1;
		}
	}
}
if(poly == 0) {
	console.log('E poly.');
} else {
	console.log('Nao e poly.');
}	
//solucao 2
if(word == word.split('').reverse().join(''))
	console.log('E poly.');
else 
	console.log('Nao e poly.');
