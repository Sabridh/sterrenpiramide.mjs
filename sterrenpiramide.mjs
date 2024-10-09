import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let number = 0;
let num;
for(let hoogte = parseFloat (await userInput.question('voer de hoogte van de piramide in: ')); number <= hoogte; number++){
    console.log();
    num = 1;
    while(num <= number){
        process.stdout.write('*')
        num++;
    }
}

process.exit();
