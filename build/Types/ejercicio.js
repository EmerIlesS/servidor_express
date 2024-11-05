"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/producto', (req, res) => {
    const color = req.query.color;
    const talla = req.query.talla;
    if (color && talla) {
        res.json({ mensaje: `Producto disponible en color ${color} y talla ${talla}` });
    }
    else if (color) {
        res.json({ mensaje: `Producto disponible solo en color ${color}` });
    }
    else if (talla) {
        res.json({ mensaje: `Producto disponible solo en talla ${talla}` });
    }
    else {
        res.json({ mensaje: 'Por favor, especifica un color y una talla' });
    }
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=ejercicio.js.map