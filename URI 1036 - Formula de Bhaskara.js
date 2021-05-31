var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');

for (var i = 0; i < 4; i++) {
    var text = lines[i].split(' ');

    var A = Number.parseFloat(text.shift());
    var B = Number.parseFloat(text.shift());
    var C = Number.parseFloat(text.shift());

    var R = Math.pow(B, 2) - 4 * A * C;

    if(R < 0 || A === 0) {
        console.log("Impossivel calcular");
    }
    else {
        var R1 = (-B + Math.sqrt(R)) / (2 * A);
        var R2 = (-B - Math.sqrt(R)) / (2 * A);

        console.log("R1 = " + R1.toFixed(5));
        console.log("R2 = " + R2.toFixed(5));
    }
}