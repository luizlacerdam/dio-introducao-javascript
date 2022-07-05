new Error()
function rec(array, num) {
try	{
	if (!array || !num)  
		throw  new ReferenceError('Missing args');
	if (typeof array !== 'object')
		throw new TypeError('array is not object');
	if (typeof num !== 'number')
		throw new TypeError('num is not a number');
	if (array.length !== num)
		throw new RangeError('num out of array range');
	return array;
	}
catch(e) {
	if (e instanceof RangeError) {
		console.log('RangeError');
		console.log(e.stack);
	} else if (e instanceof ReferenceError) {
		console.log('ReferenceError');
		console.log(e.stack); 
	} else {
		console.log('Another type of error..');
		console.log(e.stack);
	}
}
}
