# 🏡 ApImobiliária 🏠

### Descrição

Projeto de conclusão do módulo 4 da formação em Desenvolvimento Web - Full Stack da Resilia Educação.
O objetivo foi desenvolver uma API REST com integração à um banco de dados de uma imobiliária.
E os requisitos para a estruturação e entrega do projeto foram :

- Padrão REST;
- Padrão MVC;
- Node js;
- Express;
- SQLite3;
- Sequelize;
- CRUD completo.

Esta aplicação refere-se ao cadastro, listagem , atualização e deleção de Administradores.
</br>
</br>

### 💻 Para executar o projeto :

- Você precisa ter instalado em sua máquina a versão 16.14.0 [Node.js](https://nodejs.org/en/), [Insomnia](https://insomnia.rest/download), e caso queira trabalhar no código também será necessário ter um editor de código como o [VSCode](https://code.visualstudio.com/).

```bash
# Clone o repositório

$ git clone https://github.com/Nadiamizael/apImobiliaria__.git

# Acesse o diretório

$ cd apImobiliaria__

# Instale as dependências necessárias

$ npm install

"dependencies": {
    "bcrypt": "^5.0.1",
    "express": "^4.17.3",
    "sequelize": "^6.17.0",
    "sqlite3": "^5.0.2"
  },

# Inicie o projeto

$ npm start



# No Insomnia você irá realizar as requisições nas rotas utilizando os seguunter parâmetros:

{
"firstName":"...",
"lastName": "...",
"email": "...",
"password": "...",
"cpf" : "...",
"role": "..."
}

```

### 🔎 Rotas Disponíveis/Estrutura da API :

- POST:

  - /admin/register 📌 A rota deverá criar um novo Administrador com as informações passadas na requisição.Será necessário preencher todas as informações.

```js
{
"firstName":"...",
"lastName": "...",
"email": "...",
"password": "...",
"cpf" : "...",
"role": "..."
}
```

- GET:

  - /admin 📌 A rota deverá listar todos os Administradores cadastrados.
  - /admin/:id 📌 A rota deverá listar apenas o Administrador correspondente ao ID passado.

- PUT:

  - /admin/:id 📌 A rota deverá atualizar as informações passadas no corpo da requisição para um Administrador escolhido pelo ID. Será possível atualizar um único dado ou preencher todos os atributos para o novo administrador, com exceção do ID, que não é alterado manualmente.

- DELETE:

  - /admin/:id 📌 A rota deverá deletar um Administrador cadastrado no banco de dados. Será necessário passar o id do administrador que deseja deletar.

  </br>
  </br>

### Tecnologias utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

- NodeJS
- Express
- Sequelize ORM
- JavaScript
- Insomnia

</br>
</br>

## **Desenvolvido por <a href="https://www.linkedin.com/in/nadiamizael/">Nádia Mizael</a> .**

```

```
