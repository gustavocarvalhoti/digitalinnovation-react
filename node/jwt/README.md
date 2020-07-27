# Treinamento Digital Innovation - Node NoSQL - Não apenas SQL

## Instalando
```
npm install
./generateKeys.sh
```

## Iniciando
```
npm start
```

## Geral
```
### JWT
JWT - Json compactos oom segurança

### Header
Typo do token                               - typ
Criptografia utilizada - HMAC, SHA256, RSA  - alg
### Payload
Informações sa entidade tratada, ex: usuário autenticado
sub - id do usuário
iss - emissor do token
exp - expiration
iat - quando foi criado
aud - destinatário do token
### Signature
base64UrlEncode com uma chave secreta ou certificado RSA
Garante a integridade do token

### Testando o toquen
Copiar o token do login:
http://localhost:3001/login
Colocar ele na pagina abaixo para verificar se deu certo
http://localhost:3001/protected
Headers - Authorization - Bearer token - Ex: Bearer eyJhbGciOiJSUzI1N
Remover o Conten-type se for get
```
