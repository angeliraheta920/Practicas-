const fs = require("fs");
const path = require("path");

const RUTA_ARCHIVO = path.join(__dirname, "..", "usuarios.json");

function guardarUsuarios(usuarios) {
  fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(usuarios, null, 2), "utf8");
}

module.exports = guardarUsuarios;