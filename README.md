# JWT API

Este projeto é uma API REST simples em Node.js que gera e verifica tokens JWT.

## Rotas

1. **GET /gerar-token**: Gera um token JWT com uma mensagem aleatória.
2. **POST /verificar-token**: Recebe um token no corpo da requisição e retorna a mensagem decodificada se o token for válido.

## Como rodar:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/jwt-api.git

2. Instale as dependências: 
   npm install

3. Inicie o servidor:
    node index.js

Dependências
.express
.jsonwebtoken
