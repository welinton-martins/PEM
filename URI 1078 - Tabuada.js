var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

var N = lines.shift();

if (2 < N && N < 1000) {
	for(var i = 1; i <= 10; i++) {
		console.log(i + ' X ' + N + ' = ' + i*N);
	}
}

