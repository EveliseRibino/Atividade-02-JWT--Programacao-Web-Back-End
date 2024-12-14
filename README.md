# API de Geração e Verificação de Token JWT

Esta API permite gerar e verificar tokens JWT utilizando a biblioteca `jsonwebtoken`.

## Como rodar

1. Clone este repositório:

    ```bash
    git clone https://github.com/EveliseRibino/Atividade-02-JWT--Programacao-Web-Back-End.git
    ```

2. Instale as dependências:

    Navegue até o diretório do projeto e instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor:

    Para iniciar o servidor, execute o seguinte comando:

    ```bash
    node index.js
    ```

O servidor estará rodando na porta 3000 por padrão.

## Dependências

- `express`: Framework minimalista para construir a API.
- `jsonwebtoken`: Biblioteca para criar e verificar tokens JWT.

## Endpoints

1. **Gerar Token** (`GET /gerar-token`): 

    Gera um token JWT com uma mensagem aleatória.

    Exemplo de resposta:

    ```json
    {
        "token": "seu_token_aqui"
    }
    ```

2. **Verificar Token** (`POST /verificar-token`): 

    Verifica se um token é válido. Envie o token no corpo da requisição.

    Exemplo de corpo da requisição:

    ```json
    {
        "token": "seu_token_aqui"
    }
    ```

    Exemplo de resposta:

    ```json
    {
        "mensagem": "mensagem_decodificada"
    }
    ```

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
