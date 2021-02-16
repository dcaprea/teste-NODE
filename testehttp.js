var http = require('http');

var server = http.createServer(function(req, res){
    
    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de Notícias - Tecnologia</body></html>");
    }else{
        res.end("<html><body>Portal de Notícias - Qualquer Outra</body></html>");
    }

    //res.end("</body></html>");

});

server.listen(3000);