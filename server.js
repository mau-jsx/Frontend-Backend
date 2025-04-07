import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send(` ! Hola  ${nombre} ¡`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
