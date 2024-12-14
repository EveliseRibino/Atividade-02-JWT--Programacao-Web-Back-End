const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());  // Habilita o middleware para ler o corpo das requisições em formato JSON

const SECRET_KEY = 'minha_chave_secreta';  // Chave secreta para assinar o token JWT

// Rota 1: Gera um token JWT com uma mensagem aleatória
app.get('/gerar-token', (req, res) => {
    const mensagemAleatoria = Math.random().toString(36).substring(2, 15);  // Gera uma string aleatória
    const token = jwt.sign({ mensagem: mensagemAleatoria }, SECRET_KEY, { expiresIn: '1h' });  // Cria o token com expiração de 1 hora
    res.json({ token });
});

// Rota 2: Recebe um token no corpo da requisição e retorna a mensagem decodificada se o token for válido
app.post('/verificar-token', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Token é obrigatório' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        res.json({ mensagem: decoded.mensagem });  // Retorna a mensagem decodificada do token
    });
});

// Define a porta para a API
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
