var input = require('fs').readFileSync('/dev/stdin','utf-8');
var lines = input.split('\n');

var j = 0,i = 0,X = 0, Y = 0, S = 0;

var N = lines.shift();

var coluns = [];

for (i = 0; i < N; i++) {
	coluns = lines[i].split(' ');

	X = coluns.shift();
	Y = coluns.shift();

	if (X > Y) {
		for (j = Y; j < X; j++) {
			if (j > Y) {
				if (j % 2 !== 0) {
					S += j;
				}
			}
		}
	}
	else if (Y > X){
		for (j = X; j < Y; j++) {
			if (j > X) {
				if (j % 2 !== 0) {
					S += j;
				}	
			}
		}
	}

	console.log(S);

	S = 0;
}