const input = document.getElementById("nota-input");
const boton = document.getElementById("agregar-btn");
const lista = document.getElementById("lista-notas");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
  setTimeout(() => { mensaje.textContent = ""; }, 3000);
}

input.addEventListener("input", () => {
  boton.disabled = input.value.trim() === "";
});

boton.addEventListener("click", function() {
  const texto = input.value.trim();
  
  if (texto === "") {
    mostrarMensaje("Escribe algo antes de agregar.", "error");
    return;
  }

  const nuevaNota = document.createElement("div");
  nuevaNota.className = "nota-item";
  
  const spanTexto = document.createElement("span");
  spanTexto.textContent = texto;
  
  const botonEliminar = document.createElement("button");
  botonEliminar.className = "boton-eliminar";
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", function() {
    if (confirm("¿Seguro que quieres eliminar esta nota?")) {
      lista.removeChild(nuevaNota);
      mostrarMensaje("Nota eliminada", "exito"); 
    }
  });

  nuevaNota.appendChild(spanTexto);
  nuevaNota.appendChild(botonEliminar);
  lista.appendChild(nuevaNota);
  
  input.value = "";
  boton.disabled = true; 
  
  mostrarMensaje("Nota agregada", "exito"); 
});