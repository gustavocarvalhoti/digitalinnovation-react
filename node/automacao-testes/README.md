# Treinamento Digital Innovation - Automação de testes

## Instalando
```
npm install
npm install eslint

"chai": "^4.2.0",       <- Compara variáveis
"mocha": "^6.2.0",      <- Executa os testes
"sinon": "7.3.2",       <- Faz o mock de funções que são sobrscritas
"supertest": "^4.0.2"   <- Testando requisições HTTP
```

## Iniciando
```
./node_modules/.bin/eslint --init       <- Start Eslint
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JSON
✔ What style of indentation do you use? · tab
✔ What quotes do you use for strings? · single
✔ What line endings do you use? · unix
✔ Do you require semicolons? · No / Yes
Local ESLint installation not found.

Criou o arquivo .eslintrc.json com as configurações e começa a seguir elas a partir de agora

npm start
```

## Geral
```
### Qualidade é definir or padrões de programação antes do inicio do projeto
Legibilidade - Causa muitos problemas ou gera retrabalho, precisa bater o olho e entender
Menos códigos é melhor, separar as responsabilidades em arquivos.
Manutenibilidade - Capacidade de manter o código estável, estabilidade, flexibilidade, usabilidade.

### Clean Code JavaScript
https://github.com/felipe-augusto/clean-code-javascript

### Eslint - Descobre os bugs

API Testáveis com Node, Waldemar Neto
https://leanpub.com/construindo-apis-testaveis-com-nodejs

### Testes
Unit Tests - Testes de baixo nível, mais rápidos, testando partes isoladas
Integration Tests - Testa o comportamento da integração, chamando um serviço por exemplo
Integration Contract Tests - Verifa a integridade da API

### Geral
mocha.opts - Roda antes dos testes
--slow 5000 - Fica vermelho se demorar mais que 5 segundos

```
