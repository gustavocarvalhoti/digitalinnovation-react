# Treinamento Digital Innovation - Node NoSQL - Não apenas SQL

## Instalando
```
npm install
```

## Iniciando
```
npm start
```

## Geral
```
### Node NoSQL
Dados armazenados como documentos, chava - valor
Armazenado na forma de grafos
Não aplica o conceito de schema
Aprlca todas as informações no mesmo documento

### Diferença de nomenclatura
SQL     -   NoSQL
tables  -   collections
rows    -   documents (BSON/JSON)
columns -   fields

O SQL é mais consistente quanto a validade das informações

### Sharding - for big datas
Usado para dividir os dado des de uma colection entre mais de um servidor

### Capped Collection
Tamanhos predefinisdos, exemplo: Ultimos 50 cadastros

### Mongoose
ORM nesse caso ODM para modelar/estruturar os dados

### Teste da API
POST: http://localhost:3000/users
Utilizaf form url encoded
firstName   = Gustavo
lastName    = Silva
email       = gu@gmail.com   
GET: http://localhost:3000/users
PUT: http://localhost:3000/users/5f149ea31e50c11d121f51f9
email       = gustavera@gmail.com 
DELETE: http://localhost:3000/users/5f149ea31e50c11d121f51f9
```
