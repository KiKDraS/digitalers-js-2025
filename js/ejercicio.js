function mostrarUsuarios() {
  var tbody = document.getElementById("usuarios");

  for (var i = 0; i < listaUsuarios.length; i++) {
    var usuario = listaUsuarios[i];

    tbody.innerHTML +=
      "<tr><td>" +
      usuario.nombre +
      "</td><td>" +
      usuario.password +
      "</td></tr>";
  }
}

function crearUsuario() {
  var usuario = { nombre: "", password: "" }; //Scope de la variable: local

  usuario.nombre = prompt("Ingrese nombre de usuario");
  for (var i = 0; i < listaUsuarios.length; i++) {
    var usuarioEnLista = listaUsuarios[i];

    while (usuario.nombre === usuarioEnLista.nombre) {
      usuario.nombre = prompt("Nombre repetido. Ingrese otro nombre");
    }
  }

  usuario.password = prompt("Ingrese la contraseña");
  while (!usuario.password) {
    usuario.password = prompt(
      "Contraseña vacía. Ingrese una contraseña válida"
    );
  }

  return usuario;
}
