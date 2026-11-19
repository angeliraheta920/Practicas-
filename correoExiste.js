function correoExiste(usuarios, correoBuscado, indiceExcluir = -1) {
  const normalizado = correoBuscado.trim().toLowerCase();

  return usuarios.some((usuario, indice) => {
    if (indice === indiceExcluir) {
      return false;
    }
    return String(usuario.correo || "").trim().toLowerCase() === normalizado;
  });
}

module.exports = correoExiste;