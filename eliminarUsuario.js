const cargarUsuarios = require("./cargarUsuarios");
const guardarUsuarios = require("./guardarUsuarios");

function eliminarUsuario(rl, volverAlMenu) {
  const usuarios = cargarUsuarios();

  if (usuarios.length === 0) {
    console.log("\nNo hay usuarios registrados para eliminar.\n");
    return volverAlMenu();
  }

  console.log("\nSeleccione el número de usuario a eliminar:");
  usuarios.forEach((u, index) => {
    console.log(`${index + 1}. ${u.nombre} ${u.apellido} (${u.correo})`);
  });

  rl.question("Número de usuario: ", (opcionTexto) => {
    const indice = Number(opcionTexto.trim()) - 1;

    if (Number.isNaN(indice) || indice < 0 || indice >= usuarios.length) {
      console.log("\nError: Selección inválida. Operación cancelada.\n");
      return volverAlMenu();
    }

    const eliminado = usuarios.splice(indice, 1)[0];
    guardarUsuarios(usuarios);

    console.log(
      `\nUsuario "${eliminado.nombre} ${eliminado.apellido}" eliminado.\n`
    );
    volverAlMenu();
  });
}

module.exports = eliminarUsuario;