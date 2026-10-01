import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese un número N: ", function(nume) {
    const N = parseInt(nume);
    let Primo = true;

    
    if (N <= 1) {
        Primo = false;
    } else {
        for (let i = 2; i < N; i++) {
            if (N % i === 0) {
                Primo = false;
                break; // 
            }
        }
    }

    if (Primo) {
        console.log(`El número ${N} SÍ es primo.`);
    } else {
        console.log(`El número ${N} NO es primo.`);
    }

    console.log(`Números primos hasta ${N}:`);
    let listaPrimos = "";

    for (let num = 2; num <= N; num++) {
        let primoActual = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                primoActual = false;
                break;
            }
        }

        if (primoActual) {
            listaPrimos += num + " ";
        }
    }

    console.log(listaPrimos);
    rl.close();
});