// importacion de express 
const express = require('express')
const morgan = require('morgan')
// se realiza la instancia de Express
const app = express()
/*
     uso de morgan -> que sirve para mostrar los log de req del http
     parametros: dev, short,tiny,combined*, etc
    url del modilo:https://www.npmjs.com/package/morgan
*/
app.use(morgan('dev'))

//Middleware -> funciones que se activan con las rutas
app.use((req,res,next)=>{
    console.log('request url: '+req.url);
    next();
});

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
