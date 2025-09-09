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

`KEYAPI=SUA_CHAVE_AQUI`  
`PORT=3000`

## 🚀 Como rodar o projeto
### Back-end
#### Abra o terminal e navegue até a pasta do back-end:
`cd Biblia-fullstack/backend`
#### Instale as dependências
`npm install`
#### Rode o servidor
`npm start`
O servidor estará disponível em `http://localhost:3000/api`

### Front-end
#### Abra outro terminal e navegue até a pasta do front-end
`cd Biblia-fullstack/frontend`
#### Rode o servidor HTTP local usando npx
`npx http-server .`  

Responda “Y” se o npx perguntar para instalar temporariamente o pacote.  

O Front estará disponível em `http://127.0.0.1:8080`

## Observações

- O front-end foi criado com auxílio de IA apenas para consumir a API.
- O foco do projeto é demonstrar habilidades em back-end.
- Nunca compartilhe o arquivo .env com suas chaves privadas no GitHub.
