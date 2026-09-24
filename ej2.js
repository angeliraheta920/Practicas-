import readline from 'node:readline';

const clasificador = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

clasificador.question("Ingrese el primer número (a): ", function(A){
    let a = parseFloat(A);

    clasificador.question("Ingrese el segundo número (b): ", function(B){
        let b = parseFloat(B);

        clasificador.question("Ingrese el tercer número (c): ", function(C){
            let c = parseFloat(C);

            if (a === b && b === c) {
                console.log("Los tres números son iguales");
            } else if (a !== b && b !== c && a !== c) {
                console.log("Los tres números son diferentes");
            } else {
                console.log("Hay dos números iguales");
            }

            let mayor = a;
            let menor = a;

            if (b > mayor) {
                mayor = b;
            }
            if (c > mayor) {
                mayor = c;
            }
            if (b < menor) {
                menor = b;
            }
            if (c < menor) {
                menor = c;
            }

            console.log("El número mayor es: " + mayor);
            console.log("El número menor es: " + menor);

            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay números negativos");
            }

            clasificador.close();
        });
    });
});