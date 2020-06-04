const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

// HBS Express
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {

    //res.send('Hola mundo...')
    //     let salida = {
    //       nombre: 'fernando',
    //       edad: 32,
    //       url:req.url
    //   }

    // res.send(salida);

    res.render('home', {
        // variables dinamicas enviadas a las vistas
        nombre: 'Eddy',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) =>{
    res.render('about',{
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto 3000 ${ port }`);
});