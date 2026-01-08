const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    n = str.length;
    for(let i = 0; i < n; i++){
        console.log(str[i]);
    }
    process.exit();
});