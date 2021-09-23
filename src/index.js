const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 4000;

app.use(cors());

const productos = [
    { id: 1, nombre: "Nike", talle: 34, precio: 15000},
    { id: 2, nombre: "Adidas", talle: 35, precio: 25000},
    { id: 3, nombre: "xyz", talle: 35, precio: 25000}
];

const getProductos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productos), 1500);
    });
}

app.get("/productos", async (req, res) => {
    const productos = await getProductos();
    res.send(productos);
});

app.listen(PORT, () => {
    console.info(`Iniciando servidor en puerto ${PORT}`);
});