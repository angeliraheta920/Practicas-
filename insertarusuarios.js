const cargarUsuarios = require("./cargarUsuarios");
const guardarUsuarios = require("./guardarUsuarios");
const correoExiste = require("./correoExiste");

function insertarUsuario(rl, volverAlMenu) {
  rl.question("Nombre: ", (nombre) => {
    rl.question("Apellido: ", (apellido) => {
      rl.question("Edad: ", (edadTexto) => {
        rl.question("Correo: ", (correo) => {
          const usuarios = cargarUsuarios();
          const correoLimpio = correo.trim();

          if (!correoLimpio) {
            console.log("\nError: El correo no puede estar vacío.\n");
            return volverAlMenu();
          }

          if (correoExiste(usuarios, correoLimpio)) {
            console.log(
              "\nError: El correo electrónico ya está registrado. Operación cancelada.\n"
            );
            return volverAlMenu();
          }

          const nuevoUsuario = {
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            edad: Number(edadTexto.trim()),
            correo: correoLimpio,
          };

          usuarios.push(nuevoUsuario);
          guardarUsuarios(usuarios);

          console.log("\nUsuario insertado y guardado en usuarios.json.\n");
          volverAlMenu();
        });
      });
    });
  });
}

module.exports = insertarUsuario;