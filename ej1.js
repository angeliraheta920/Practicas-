import readline from "node:readline";

const fc = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

fc.question("Ingrese un número entero positivo: ", function(num) {
    const n = parseInt(num);
    let factorial = 1;
    let secu = "";

 
    for (let i = n; i >= 1; i--) {
        factorial = factorial * i;
        
        
        if (i === n) {
            
        } else {
            secu = secu + " x " + i;
        }
    }

    console.log(`${n}! = ${secu} = ${factorial}`);

    fc.close();
});