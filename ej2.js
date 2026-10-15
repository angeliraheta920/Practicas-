import readline from "node:readline";

const medida = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function areaCirculo(r) { return Math.PI * r * r; }
function perimetroCirculo(r) { return 2 * Math.PI * r; }

function areaCuadrado(l) { return l * l; }
function perimetroCuadrado(l) { return 4 * l; }

function areaRectangulo(b, a) { return b * a; }
function perimetroRectangulo(b, a) { return 2 * (b + a); }

function areaTriangulo(b, a) { return (b * a) / 2; }
function perimetroTriangulo(l1, l2, l3) { return l1 + l2 + l3; }

console.log("1. Círculo\n2. Cuadrado\n3. Rectángulo\n4. Triángulo");

medida.question("Elija una figura (1-4): ", (opcion) => {
    switch (opcion) {
        case "1":
            medida.question("Ingrese el radio: ", (r) => {
                const val = parseFloat(r);
                console.log(`Área: ${areaCirculo(val).toFixed(2)} | Perímetro: ${perimetroCirculo(val).toFixed(2)}`);
                tienda.close();
            });
            break;

        case "2":
            medida.question("Ingrese el lado: ", (l) => {
                const val = parseFloat(l);
                console.log(`Área: ${areaCuadrado(val).toFixed(2)} | Perímetro: ${perimetroCuadrado(val).toFixed(2)}`);
                tienda.close();
            });
            break;

        case "3":
            medida.question("Base: ", (b) => {
                medida.question("Altura: ", (a) => {
                    const base = parseFloat(b), alt = parseFloat(a);
                    console.log(`Área: ${areaRectangulo(base, alt).toFixed(2)} | Perímetro: ${perimetroRectangulo(base, alt).toFixed(2)}`);
                    tienda.close();
                });
            });
            break;

        case "4":
            medida.question("Base: ", (b) => {
                medida.question("Altura: ", (a) => {
                    medida.question("Lado 1: ", (l1) => {
                        medida.question("Lado 2: ", (l2) => {
                            medida.question("Lado 3: ", (l3) => {
                                console.log(`Área: ${areaTriangulo(parseFloat(b), parseFloat(a)).toFixed(2)}`);
                                console.log(`Perímetro: ${perimetroTriangulo(parseFloat(l1), parseFloat(l2), parseFloat(l3)).toFixed(2)}`);
                                medida.close();
                            });
                        });
                    });
                });
            });
            break;

        default:
            console.log("Opción no válida.");
            medida.close();
    }
});