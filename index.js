const express= require('express');
const cors= require('cors');
const app= express();
const PORT= process.env.PORT || 3000

app.use(cors());
app.use(express.json());

let ultimoDato= {};

app.post('/datos',(req, res)=>{
    ultimoDato= req.body;
    console.log('Datos recibidos:', ultimoDato);
    res.sendStatus(200);
});

app.get('/datos', (req, res)=>{
    res.json(ultimoDato);
});
app.get('/', (req, res)=>{
    res.send('Servidor backend ESP32 corriendo.');
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
});