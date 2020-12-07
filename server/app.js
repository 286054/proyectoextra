const express = require('express')
const app = express()
const path = require('path')
app.get("",(request,response)=>{
  return response.sendFile(path.join(__dirname+"./../assets/html/index.html"))
})
app.get("/about",(request,response)=>{
  return response.json({
  servidor: "Mi web server",
  equipo: [{name:"Hector", lastName:"Silvadoray Ornelas"}]
  })
})

app.listen(4000, () => {
  console.log("Servidor iniciado");
})
