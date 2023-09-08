import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    date: string;
}

type TransactionInput = Pick<Transaction, 'title'| 'value'| 'type' | 'category' >

interface TransactionsProviderProps{
    children: React.ReactNode;
}

interface transactionsContextData{
    transactions: Transaction[],
    createTransaction: (transaction : TransactionInput) => Promise<void>;
}


export const TransactionsContext = createContext<transactionsContextData>(
    {} as transactionsContextData
);

export function TransactionsProvider({children} : TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect( () => {
        api.get('transactions')
        .then(response => setTransactions(response.data))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', transactionInput);
        setTransactions([...transactions, response.data]);
    }


    return(
       <TransactionsContext.Provider value={{ transactions, createTransaction}}>
        {children}
       </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}

