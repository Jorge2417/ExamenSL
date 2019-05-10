const express = require('express');
const app = express(),
    path = require('path');
const mysql = require('mysql'),
    myConnection = require('express-myconnection');


// importing routes
const arbolRoutes = require('./Routes/arbol');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'Presentacion'));
app.set('view engine', 'ejs');

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'examen'
  }, 'single'));
 // hola profe
  //apruebame
app.use(express.urlencoded({extended: false}));

app.use(holaaa);
app .metodo();
// routes
app.use('/', arbolRoutes);

app.listen(app.get('port'), () => {
console.log(`server on port ${app.get('port')}`);
});

// Marco xd xd !!!!! 
// coco es rata :p 
