const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Authorization'],
}

app.use(cors());

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


app.listen(port, () => {
    console.log(`Servidor web local iniciado en http:/localhost:${port}`);
});