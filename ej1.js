import readline from "node:readline";

const califi = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function obtenerLetra(calificacion) {
    if (calificacion >= 90) {
        return "A";
    } else if (calificacion >= 80) {
        return "B";
    } else if (calificacion >= 70) {
        return "C";
    } else if (calificacion >= 60) {
        return "D";
    } else {
        return "F";
    }
}


function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

califi.question("¿Cuántas calificaciones desea ingresar?: ", (dato) => {
    const totalNotas = parseInt(dato);
    const calificaciones = [];
    let contador = 1;

    const pedirCalificacion = () => {
        if (contador <= totalNotas) {
            tienda.question(`Ingrese la calificación ${contador} (0-100): `, (notaStr) => {
                calificaciones.push(parseFloat(notaStr));
                contador++;
                pedirCalificacion();
            });
        } else {
            console.log("\n--- REPORTE DE CALIFICACIONES ---");

           
            for (let i = 0; i < totalNotas; i++) {
                const notaActual = calificaciones[i];
                console.log(`Calificación ${i + 1}: ${notaActual} -> Letra: ${obtenerLetra(notaActual)}`);
            }

            const promedioFinal = calcularPromedio(calificaciones);
            
            console.log(`\nPromedio final: ${promedioFinal.toFixed(2)}`);
            console.log(`Letra del promedio: ${obtenerLetra(promedioFinal)}`);

            tienda.close();
        }
    };

    pedirCalificacion();
});