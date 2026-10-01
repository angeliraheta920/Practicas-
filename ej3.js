import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("¿Cuántas calificaciones desea ingresar?: ", function(cant){
    const totalNotas = parseInt(cant);
    let suma = 0;
    let notaMasAlta = -Infinity;
    let notaMasBaja = Infinity;
    let contador = 1;


    const pedirSiguiente = () => {
        if (contador <= totalNotas) {
            rl.question(`Ingrese la calificación ${contador}: `,function (not) {
                const nota = parseFloat(not);
                suma += nota;

                if (nota > notaMasAlta) notaMasAlta = nota;
                if (nota < notaMasBaja) notaMasBaja = nota;

                contador++;
                pedirSiguiente(); 
            });
        } else {
            
            const promedio = suma / totalNotas;

            console.log("\nRESULTADO");
            console.log(`Promedio final: ${promedio.toFixed(2)}`);
            console.log(`Calificación más alta: ${notaMasAlta}`);
            console.log(`Calificación más baja: ${notaMasBaja}`);

            rl.close();
        }
    };

    pedirSiguiente();
});