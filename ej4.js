import readline from "node:readline";

const ejer4 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ejer4.question("Ingrese su nombre: ", function (nombre) {
    ejer4.question("Ingrese su edad: ", function (edad) {
        ejer4.question("Ingrese sus años de experiencia: ", function (experiencia) {
            nombre = nombre.toUpperCase();
            edad = parseInt(edad);
            experiencia = parseFloat(experiencia);

            if (edad > 18 && experiencia > 0) {
                console.log("Empleado: " + nombre);
                console.log("Candidato válido");
            } else {
                console.log("Empleado: " + nombre);
                console.log("No cumple con los requisitos");
            }

            ejer4.close();
        });
    });
});