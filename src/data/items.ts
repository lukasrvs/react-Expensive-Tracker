import { Item } from '../types/Item';
export const items: Item[] = [
    {   date: new Date(2021,10,1), 
        category: 'food', 
        title: 'McDonalds', 
        value: 30.00,
    },
    {   date: new Date(2021,10,15), 
        category: 'food', 
        title: 'Burger King', 
        value: 35.00,
    },
    {   date: new Date(2021,10,15), 
        category: 'rent', 
        title: 'Aluguel', 
        value: 600.00,
    },
    {   date: new Date(2021,11,18), 
        category: 'salary', 
        title: 'Salario bruto', 
        value: 3000.00,
    }
];