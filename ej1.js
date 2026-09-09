import readline from "node:readline";

const ejer1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer1.question("Ingrese un número: ", function (numero) {
    numero = parseFloat(numero);

    if (numero > 0) {
        console.log("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }

    ejer1.close();
});