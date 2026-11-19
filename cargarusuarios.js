const fs = require("fs");
const path = require("path");

const RUTA_ARCHIVO = path.join(__dirname, "..", "usuarios.json");

function cargarUsuarios() {
  if (!fs.existsSync(RUTA_ARCHIVO)) {
    fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify([], null, 2), "utf8");
    return [];
  }

  try {
    const contenido = fs.readFileSync(RUTA_ARCHIVO, "utf8").trim();
    if (!contenido) {
      return [];
    }
    const datos = JSON.parse(contenido);
    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.error("Error al leer usuarios.json:", error.message);
    return [];
  }
}

module.exports = cargarUsuarios;