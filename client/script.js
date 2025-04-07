const input = document.getElementById("nombre");
const button = document.getElementById("boton");

button.addEventListener("click", () => {
  const nombre = input.value;

  fetch(`http://localhost:3000/saludo/${nombre}`)
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error("Error al hacer la solicitud:", error);
    });
});
