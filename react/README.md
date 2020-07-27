# Treinamento Digital Innovation - React

## Instalando
```
npm init
npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1
npm install webpack webpack-cli -D
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react -D
npm install react react-dom
npm install html-webpack-plugin html-loader -D
npm install webpack-dev-server -D
npm install eslint babel-eslint eslint-plugin-react eslint-watch -D
```

## Iniciando
```
npm run build
npm run build:dev
npm start
npm run eslint
```

## Geral
```
JSX - Linguagem de marcação que cria HTML e aceita JavaScript
O Browser não entemde JSX, o Babel que transpila isso para ele
O React utiliza o React DOM para ser mais rápido
O estado é local, de cada componente, ele não sabe o que o outro está fazendo

### Ciclo de vida
Toda vez que altera uma props ou state ele renderiza aquele bloco
Estado:
Inicialização   -> props, state

Montagem        -> 
componentWillMount:         Antes do componente ser renderizado 
render:                     Monta a página
componentDidMount:          Após o render

Atualização     -> 
Props           ->
componentWillReceiveProps:  Quando recebe as props
shouldComponentUpdate:      Atualizar as props
componentWilUpdate:         Antes
componentDidUpdate:         Depois
State           ->
shouldComponentUpdate:      Atualizar as props
componentWilUpdate:         Antes
componentDidUpdate:         Depois         

Desmontagem     ->
componentWillUnmount:       Quando ele morre

### Geral
Redux           ->          Gerenciar estado
Material UI     ->          Criar interface
Ant-Design      ->          Criar interface
Jest, Gatsby    ->          Teste
React i18n Next ->          Internacionalização
Eslint          ->          Qualidade do código

### Webpack
Empacotador de módulos js, empacota em um único arquivo, aele aceita, Fontes, CSS, Img, HTML, JS e Plugins
Entry           ->          Pronto de entrada, aonde buscar os arquivos
Output          ->          Aonde gerar os bundlers
Loaders         ->          Para gerenciar os arquivos
Plugins         ->          Otimização de pacotes
Mode            ->          Passa os tipos de configurações, production, development ou none
webpack.config.js - Arquivo que configura o Webpack

### Manipulando eventos
#### onClick
const showEvent = (e) => { // O (e) é o evento que aconteceu
    console.log(e);
}
<button onClick={showEvent}>Show</button>
#### onClick passando props, argumentos
const removeCustomer = (e, id) => {
    console.log(`Cliente ID: ${id}`);
}
<button onClick={(e) => removeCustomer(e, customer.id)}>Deletar</button>
#### onChange
const handleChange = (e) => { // O (e) é o evento que aconteceu
    console.log(e.targed.value); // Pega o valor
}
<input onChange={handleChange} />

```
