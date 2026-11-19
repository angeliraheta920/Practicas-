const cargarUsuarios = require("./cargarUsuarios");

function mostrarUsuarios(rl, volverAlMenu) {
  const usuarios = cargarUsuarios();

  console.log("\n=== LISTA DE USUARIOS ===");
  if (usuarios.length === 0) {
    console.log("No hay usuarios registrados.");
  } else {
    usuarios.forEach((u, index) => {
      console.log(
        `${index + 1}. ${u.nombre} ${u.apellido} | Edad: ${u.edad} | Correo: ${u.correo}`
      );
    });
  }
  console.log("=========================\n");

  volverAlMenu();
}

module.exports = mostrarUsuarios;