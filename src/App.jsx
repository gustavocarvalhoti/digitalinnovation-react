import React from 'react';

const customers = [
    {id: 1, name: 'Gustavo Carvalho'},
    {id: 2, name: 'Michelle Regina'},
    {id: 3, name: 'Maria Eduarda'},
    {id: 4, name: 'Davi Rodrigues'},
];

const App = () => {
    /* Renderizando a lista - posso receber o index "(customer, index)" e utilizar ele como chave tb */
    const renderCustomers = (customer) => (
        <li key={`customer-${customer.id}`}>{customer.name}</li>
    )

    return (
        <div>
            <ul>
                {customers.map(renderCustomers)}
            </ul>
        </div>
    );
};

export default App;

/* Exercicio 01 - IF simples, caso exista
{
    showBtnA && (
        <div>
            {buttonA}
            <br/><br/>
        </div>

    )
}
*/

/* Exercicio 02
    const App = () => {
    const buttonA = <button>Botão A</button>;
    const buttonB = <button>Botão B</button>;
    const showBtnA = true;

    const showCustomer = () => {
        if (!showBtnA) return null;
        return <h1>Gustavo Carvalho da Silva</h1>;
    };

    return (
        <div>
            {showBtnA
                ? <div>{buttonA}</div>
                : <div>{buttonB}</div>
            }
            {showCustomer()}
        </div>
    );
};
*/
