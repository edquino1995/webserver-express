const http = require('http');

//recibe las solicitudes y respuestas
//creando el servidor
http.createServer((req, res)=>{

    res.writeHead(200, {'Content-type': 'application/json'});
    let salida = {
        nombre: 'fernando',
        edad: 32,
        url:req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

})

.listen(8080);

console.log('Escuchando el puerto 8080');