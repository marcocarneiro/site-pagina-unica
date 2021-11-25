// Inicializa a biblioteca de animação AOS
AOS.init();


//FUNÇÃO ENCAPSULADA: Preenche o SELECT com os dados da API do IBGE
(function(){
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    var select = document.getElementById('estado');
    
    /* Consulta a API com o método fetch e 
    com um laço de repetição incrementa as tags option */
    //1o then() captura os dados, 2o then() trata os dados, catch() tratamento do erro
    fetch(url).then(response => response.json()).then(json => {        
        var options = '<option>Selecione</option>';
        //DESAFIO: inserir abaixo desta linha um código para ordenar
        //em ordem alfabética o objeto json
        
        //laço de repetição
        for (let index = 0; index < json.length; index++) {
            options += '<option>'+json[index].nome+'</option>';
        }
        select.innerHTML = options;
    }).catch(erro => console.log(erro));
})();