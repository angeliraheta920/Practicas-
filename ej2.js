import readline from "node:readline";

const ejer2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer2.question("Ingrese la primera calificación (0-100): ", function (calif1) {
    ejer2.question("Ingrese la segunda calificación (0-100): ", function (calif2) {
        calif1 = parseFloat(calif1);
        calif2 = parseFloat(calif2);

        if (calif1 > calif2) {
            console.log("La calificación más alta es: " + calif1);
        } else if (calif2 > calif1) {
            console.log("La calificación más alta es: " + calif2);
        } else {
            console.log("Ambas calificaciones son iguales (" + calif1 + ")");
        }

        ejer2.close();
    });
});