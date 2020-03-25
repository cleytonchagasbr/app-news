const express = require('express');

    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();

app.get('/extract', (request, response) => {
    
    url = 'https://www.portaldatransparencia.gov.br/PortalComprasDiretasOEOrgaoSuperior.asp?Ano=2015&Valor=86726995548647&Pagina=1';

    request(url, function(error, response, html) {
        if(!error) {
            var $ = cheerio.load(html);

            var result = [];

            $('#listagem tr:not(:first-child)').each(function(i) {

                var codigo = $(this).find('td').eq(0).text().trim(),
                orgao = $(this).find('td').eq(1).text().trim(),
                valorTotal = $(this).find('td').eq(2).text().trim();


                result.push({
                    codigo: codigo,
                    orgao: orgao,
                    total: valorTotal
                });

            });
        }
    })
    
    fs.writeFile('resultado.json', JSON.stringify(resultado, null, 4), function(err) {
        console.log('JSON escrito com sucesso! O arquivo está na raiz do projeto.')
    })

});

app.listen(3000);