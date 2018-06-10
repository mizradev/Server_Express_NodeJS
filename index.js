// importacion de express 
const express = require('express')
// se realiza la instancia de Express
const app = express()

app.get('/',(req,res)=>{
    res.end('HOla MUndo con Express')
})

app.listen(3000,()=>{console.log('Run Server on http://localhost:3000')})
