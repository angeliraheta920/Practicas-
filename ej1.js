
import readline from 'node:readline';

const sistemaBanco = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sistemaBanco.question("Ingrese su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ", function(tipoTarj){
    let tarjeta = parseInt(tipoTarj);
    let limite = 0;
    let tarjetaValida = true;

    switch (tarjeta) {
        case 1:
            limite = 500;
            break;
        case 2:
            limite = 1000;
            break;
        case 3:
            limite = 2000;
            break;
        default:
            tarjetaValida = false;
            break;
    }

    if (tarjetaValida == false) {
        console.log("Tarjeta no válida");
    } else {
        sistemaBanco.question("Ingrese el monto a retirar: ", function(montoRetiro){
            let monto = parseFloat(montoRetiro);

            if (monto > limite) {
                console.log("Límite excedido");
            } else if (monto % 10 !== 0) {
                console.log("El monto debe ser múltiplo de 10");
            } else {
                console.log("Retiro exitoso");
            }

            sistemaBanco.close();
        });
    }
});