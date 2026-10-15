import readline from "node:readline";

const voca = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocales(texto) {
    let contador = 0;
    const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

function invertirCadena(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}



function esPalindromo(texto) {
   
    let limpio = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            limpio += texto[i].toLowerCase();
        }
    }
    
    let alReves = "";
    for (let i = limpio.length - 1; i >= 0; i--) {
        alReves += limpio[i];
    }

    return limpio === alReves;
}


voca.question("Ingrese una palabra o frase: ", (frase) => {
    const totalVocales = contarVocales(frase);
    const cadenaInvertida = invertirCadena(frase);
    const palindromo = esPalindromo(frase);

    console.log("\n--- RESULTADOS ---");
    console.log(`Cantidad de vocales: ${totalVocales}`);
    console.log(`Cadena invertida: ${cadenaInvertida}`);
    console.log(`¿Es palíndromo?: ${palindromo ? "Sí" : "No"}`);

    tienda.close();
});