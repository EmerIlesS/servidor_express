import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Ruta con `if` para verificar los parámetros `color` y `talla`
app.get('/producto', (req: Request, res: Response) => {
  const color = req.query.color as string | undefined;
  const talla = req.query.talla as string | undefined;

  if (color && talla) {
    res.json({ mensaje: `Producto disponible en color ${color} y talla ${talla}` });
  } else if (color) {
    res.json({ mensaje: `Producto disponible solo en color ${color}` });
  } else if (talla) {
    res.json({ mensaje: `Producto disponible solo en talla ${talla}` });
  } else {
    res.json({ mensaje: 'Por favor, especifica un color y una talla' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
