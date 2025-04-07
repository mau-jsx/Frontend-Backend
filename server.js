import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(` ! Hola ¡ ${nombre}`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
