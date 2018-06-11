// importacion de express 
const express = require('express')
// se realiza la instancia de Express
const app = express()

// Rutas
app.get('/',(req,res)=>{
    res.end('HOla MUndo con Express')
})

app.get('/login',(req,res)=>{
    res.end('Login');
})

app.get('*',(req,res)=>{
    res.end('Esta recurso no existe');
});

app.listen(3000,()=>{console.log('Run Server on http://localhost:3000')})
