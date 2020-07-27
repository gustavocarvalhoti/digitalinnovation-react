# Treinamento Digital Innovation - Node

## Instalando
```
### PostgresSQL
docker-compose.yml -> docker-compose up <- start
version: '2'
services:
  db_pg:
    image: postgres:9.6
    ports:
     - "5432:5432"
    environment:
      - POSTGRES_PASSWORD=postgres
    volumes:
      - ./data/pg:/var/lib/postgresql/data
#### OU
docker run --name some-postgres -e POSTGRES_PASSWORD=root -d -p 5432:5432 postgres

npm init                        <- Inicia o projeto
npm install --save pg           <- Postgres
npm install --save sequelize    <- Sequelize ORM
```

## Iniciando
```
### Executar scripts de criação
node js/1_drop.js
node js/2_create.js
node js/3_insert.js 
node js/4_select.js

### Teste Sequelize
node sequelize/_database.js
node sequelize/1_create.js 
node sequelize/2_insert.js 
node sequelize/3_select.js 
node sequelize/4_select_advanced.js 
```

## Geral
```
### Postgres - Coisas legais dele
UUID - Tem nativo
PostGIS - Utliza coordenadas para comparar geolocalização, exemplo 5km de SP
Unaccent - Remove acentos na pesquisa

### Sequelize - compativel com MySQL, Sqlite, Postgresql, SQL Server
Versátil e Robusto
```
