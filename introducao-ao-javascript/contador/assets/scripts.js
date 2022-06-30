let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {		
	count++;
	CURRENT_NUMBER.innerHTML = count;

	
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}


let decre = document.getElementById('decre');
let incre = document.getElementById('incre');

decre.addEventListener('click', function(event){
	if(count < 0) {
		CURRENT_NUMBER.style.color = 'Red'
	} else {
		CURRENT_NUMBER.style.color = 'Black'
	}
	if(count <= -10) {
		decre.disabled = true;
		
	} else {
		incre.disabled = false;
		decre.disabled = false;
	}
} )

incre.addEventListener('click', function(event){
	if(count < 0) {
		CURRENT_NUMBER.style.color = 'Red'
	} else {
		CURRENT_NUMBER.style.color = 'Black'
	}
	if(count >= 10) {
		incre.disabled = true;
		
	} else {
		incre.disabled = false;
		decre.disabled = false;
	}
} )
