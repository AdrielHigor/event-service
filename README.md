# Documentação da API

Esta API é construída usando Node.js e InversifyJS para fornecer um servidor com controllers, conectividade de banco de dados e serviços para CRUD de eventos e locais.

## Instalação

Para instalar a API, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/username/repository.git`
2. Instale as dependências: `npm install`
3. Configure as contantes de conexão com database em contansts.ts e config.js
4. Execute: `npx sequelize-cli db:migrate`
5. Execute: `npm run dev`

## Instalação Docker

Para utilizar a API com docker, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/username/repository.git`
2. Na pasta raiz da aplicação execute: `docker-compose up`

## Endpoints

Esta API possui os seguintes endpoints:

### Eventos

#### `GET /event`

Retorna uma lista paginada de todos os eventos.

#### `GET /event/all`

Retorna uma lista sem paginação de todos os eventos.

#### `GET /event/:id`

Retorna o evento com o ID especificado.

#### `POST /event`

Cria um novo evento.

#### `PUT /event/:id`

Atualiza o evento com o ID especificado.

#### `DELETE /event/:id`

Exclui o evento com o ID especificado.

### Locais

#### `GET /location`

Retorna uma lista paginada de todos os locais.

#### `GET /location/:id`

Retorna o local com o ID especificado.

#### `POST /location`

Cria um novo local.

#### `PUT /location/:id`

Atualiza o local com o ID especificado.

#### `DELETE /location/:id`

Exclui o local com o ID especificado.

## Configuração

A API pode ser configurada modificando a classe `Constants` localizada em `utils/constants.ts`.

### Porta

A porta na qual o servidor irá escutar pode ser alterada modificando a propriedade `port`. Por padrão, ela está definida como `3002`.

## Dependências

Esta API usa as seguintes dependências:

- `body-parser`: middleware para analisar corpos de solicitação JSON e codificados em URL
- `cors`: middleware para habilitar o compartilhamento de recursos entre origens diferentes (CORS)
- `express`: framework web para Node.js
- `inversify`: framework de injeção de dependência para TypeScript
- `inversify-express-utils`: um conjunto de decoradores e utilitários para construir aplicativos ExpressJS com InversifyJS
- `pg`: driver do PostgreSQL para Node.js
- `reflect-metadata`: uma implementação JavaScript da API de metadados ES7
- `sequelize`: ORM para Node.js que suporta vários bancos de dados relacionais


## Serviços e Repositórios

Esta API usa os seguintes serviços e repositórios:

### EventService

Um serviço para gerenciar lógica de negócio dos eventos.

### EventRepository

Um repositório para acessar eventos no banco de dados.

### LocationService

Um serviço para gerenciar lógica de negócio dos locais.

### LocationRepository

Um repositório para acessar locais no banco de dados.
