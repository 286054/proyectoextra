const express = require('express')
const app = express()
const path = require('path')
app.get("",(request,response)=>{
  return response.sendFile(path.join(__dirname+"./../assets/html/index.html"))
})

app.listen(4000, () => {
  console.log("Servidor iniciado");
})
