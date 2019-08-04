# crud-spring-angular
Cadastro de clientes, CRUD completo utilizando API Rest escrita em java Spring e Angular 7 para o Front End

# API


    {
    "nome": "API CadastroCliente",
    "endpoints": [
        {
            "caminho": "/cliente",
            "metodos": {
                "get": "Lista de clientes cadastrados",
                "post": [
                    "Insere registros",
                    "Atualiza registros"
                ],
                "delete": "deleta registro"
            },
            "reqFormato": {
                "id": 1,
                "name": "foo",
                "email": "foo@foo.com",
                "dtVisita": "AAAA-MM-DDTHH:MM:SS.SSS",
                "representante": {
                    "id": 1,
                    "nome": "bar",
                    "email": "bar@bar.com"
                },
                "valorDesloc": "999.99"
            }
        },
        {
            "caminho": "/repres",
            "metodos": {
                "get": "Lista de representantes cadastrados",
                "post": [
                    "Insere registros",
                    "Atualiza registros"
                ],
                "delete": "deleta registro"
            },
            "reqFormato": {
                "id": 1,
                "nome": "bar",
                "email": "bar@bar.com"
            }
        },
        {
            "caminho": "/meta",
            "metodos": {
                "get": "retorna metaDados dos Representantes"
            }
        }
      ]
    }



## Informações adicionais

A API apenas responde requisições cross-domain de http://localhost:4200

Feito por Gustavo Velozo
gvnv.2000@gmail.com
(11) 99421-4636
