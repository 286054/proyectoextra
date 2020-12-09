const express = require('express')
const app = express()
const path = require('path')
//middleware para recibir archivos
app.use(express.static(__dirname+"./../assets"))
//ruta de index
app.get("/",(request,response)=>{

  return response.sendFile(path.join(__dirname+"./../assets/index.html"))
})
//ruta de curriculum
app.get("/curriculum",(request,response)=>{

  return response.sendFile(path.join(__dirname+"./../assets/curriculum.html"))
})
//ruta de about de json
app.get("/about",(request,response)=>{
  return response.json({
  servidor: "Mi web server",
  equipo: [{name:"Hector", lastName:"Silvadoray Ornelas"}]
  })
})
//Puerto de uso
app.listen(4000, () => {
  console.log("Servidor iniciado");
})
