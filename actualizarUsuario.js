const cargarUsuarios = require("./cargarUsuarios");
const guardarUsuarios = require("./guardarUsuarios");
const correoExiste = require("./correoExiste");

function actualizarUsuario(rl, volverAlMenu) {
  const usuarios = cargarUsuarios();

  if (usuarios.length === 0) {
    console.log("\nNo hay usuarios registrados para actualizar.\n");
    return volverAlMenu();
  }

  console.log("\nSeleccione el número de usuario a actualizar:");
  usuarios.forEach((u, index) => {
    console.log(`${index + 1}. ${u.nombre} ${u.apellido} (${u.correo})`);
  });

  rl.question("Número de usuario: ", (opcionTexto) => {
    const indice = Number(opcionTexto.trim()) - 1;

    if (Number.isNaN(indice) || indice < 0 || indice >= usuarios.length) {
      console.log("\nError: Selección inválida. Operación cancelada.\n");
      return volverAlMenu();
    }

    const actual = usuarios[indice];

    rl.question(`Nuevo nombre (${actual.nombre}): `, (nombre) => {
      rl.question(`Nuevo apellido (${actual.apellido}): `, (apellido) => {
        rl.question(`Nueva edad (${actual.edad}): `, (edadTexto) => {
          rl.question(`Nuevo correo (${actual.correo}): `, (correo) => {
            const correoFinal = correo.trim() || actual.correo;

            if (correoExiste(usuarios, correoFinal, indice)) {
              console.log(
                "\nError: Ese correo ya pertenece a otro usuario. Operación cancelada.\n"
              );
              return volverAlMenu();
            }

            const edadFinal =
              edadTexto.trim() !== "" ? Number(edadTexto.trim()) : actual.edad;

            usuarios[indice] = {
              nombre: nombre.trim() || actual.nombre,
              apellido: apellido.trim() || actual.apellido,
              edad: edadFinal,
              correo: correoFinal,
            };

            guardarUsuarios(usuarios);
            console.log("\nUsuario actualizado correctamente.\n");
            volverAlMenu();
          });
        });
      });
    });
  });
}

module.exports = actualizarUsuario;