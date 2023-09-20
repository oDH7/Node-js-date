var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
  
  var dataAtual = new Date();
  var dataFormatada = dataAtual.toLocaleDateString('pt-BR');

  res.end('<h1 style="font-size: 24px;">Davi Henrique Lacerda</h1>\n<p>Data atual: ' + dataFormatada + '</p>');
}).listen(8003);

