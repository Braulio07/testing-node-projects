var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('HOLA ESTAS EJECUTANDO EL PROYECTO NUMERO 1 :)!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});