var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('HOLA ESTAS EJECUTANDO EL PROYECTO NUMERO 2 :)!');
});

app.listen(4000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 4000!');
});