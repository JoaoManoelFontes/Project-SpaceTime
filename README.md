# SpaceTime - Relembrando o passado

## Projeto realizado na nlw da rocketseat

### Instalação

- Clone o repositório
- Instale as dependências da pasda `server` e `web` com `npm install`
- Crie um arquivo `.env` na pasta `server` com as variáveis de ambiente

#### Template do arquivo `server/.env`

```javascript
DATABASE_URL = "file:./dev.db";
GITHUB_CLIENT_SECRET = "YOUR_GITHUB_CLIENT_SECRET";
GITHUB_CLIENT_ID = "YOUR_GITHUB_CLIENT_ID";
```

- Crie um arquivo `.env.local` na pasta `web` com as variáveis de ambiente

#### Template do arquivo `web/.env`

```javascript
NEXT_PUBLIC_GITHUB_CLIENT_ID = YOUR_GITHUB_CLIENT_ID;
```

Para mais informações sobre o sistema de autenticação com o GitHub, acesse [https://docs.github.com/pt/apps/oauth-apps](https://docs.github.com/pt/apps/oauth-apps)

- Inicie o servidor com `npm run dev` na pasta `server`
- Inicie o front-end com `npm run dev` na pasta `web`
