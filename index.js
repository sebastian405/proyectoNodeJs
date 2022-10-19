console.clear();
const express = require('express');
const server = express();
const dotenv = require('dotenv');
const colors = require('colors');
dotenv.config();
const port = process.env.PORT;

server.get('/', (req, res) => {
    res.send(`<table border=20>
    <tr>
        <th>Nombre</th>
        <th>Cedula</th>
        <th>Correo</th>
        <th>Imagen</th>
    </tr>
    <tr>
        <td>${process.env.NOMBRE}</td>
        <td>${process.env.CEDULA}</td>
        <td>${process.env.CORREO}</td>
        <td><img src="${process.env.IMG}" alt="user" width="100%" height="60px"></td>
    </tr>
    </table>`);
});

server.listen(port, () => {
    console.log(`Puerto ${port} encendido.`.blue);
});