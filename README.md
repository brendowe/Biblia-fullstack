# 📖 Bíblia Full Stack

Projeto Full Stack que exibe livros, capítulos e versículos da Bíblia.
O foco do projeto é o back-end, desenvolvido manualmente.
O front-end foi criado com auxílio de IA apenas para consumir e exibir os dados.

## 🏗️ Estrutura do projeto

Biblia-fullstack/
├── backend/        # Back-end em Node.js (Express)
├── frontend/       # Front-end simples para consumir a API
├── README.md       # Este arquivo

## ⚡ Tecnologias usadas

### Back-end
- Node.js
- Express 
- CORS

### Front-end
- HTML
- CSS
- JavaScript

### API externa

- A API externa é privada e pode ser adquirida no site do [pesquisar na Bíblia](https://pesquisarnabiblia.com.br/api-projeto/public/index.php)

## 🔑 Configuração de variáveis de ambiente

O back-end precisa de um arquivo .env na pasta backend com as chaves da API privada.

`KEYAPI=SUA_CHAVE_AQUI
PORT=3000`