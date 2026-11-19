const readline = require("readline");
const insertarUsuario = require("./insertarUsuario");
const mostrarUsuarios = require("./mostrarUsuarios");
const actualizarUsuario = require("./actualizarUsuario");
const eliminarUsuario = require("./eliminarUsuario");

function menuPrincipal() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const volverAlMenu = () => {
    menuCiclo();
  };

  const menuCiclo = () => {
    console.log("=== MENÚ PRINCIPAL ===");
    console.log("1. Insertar");
    console.log("2. Mostrar");
    console.log("3. Actualizar");
    console.log("4. Eliminar");
    console.log("5. Salir");

    rl.question("Elija una opción: ", (opcion) => {
      switch (opcion.trim()) {
        case "1":
          insertarUsuario(rl, volverAlMenu);
          break;
        case "2":
          mostrarUsuarios(rl, volverAlMenu);
          break;
        case "3":
          actualizarUsuario(rl, volverAlMenu);
          break;
        case "4":
          eliminarUsuario(rl, volverAlMenu);
          break;
        case "5":
          console.log("\nSaliendo del sistema. ¡Hasta pronto!");
          rl.close();
          break;
        default:
          console.log("\nOpción no válida. Intente de nuevo.\n");
          menuCiclo();
          break;
      }
    });
  };

  menuCiclo();
}

module.exports = menuPrincipal;