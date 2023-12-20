import { createContext, useContext, useEffect, useState } from 'react'

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
    createTransaction: (transaction : TransactionInput) => void;
    removeTransaction : (id : number) => void
}


const TransactionsContext = createContext<transactionsContextData>(
    {} as transactionsContextData
);

export function TransactionsProvider({children} : TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect( () => {
        const existingTransactionsString = localStorage.getItem('transactions');

        const existingTransactions = existingTransactionsString ? JSON.parse(existingTransactionsString) : [];

        setTransactions(existingTransactions);
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const existingTransactionsString = localStorage.getItem('transactions');
    
        const existingTransactions = existingTransactionsString ? JSON.parse(existingTransactionsString) : [];

        const newTransaction = {
            id: Date.now(),
            ...transactionInput
        };
        const updatedTransactions = [...existingTransactions, newTransaction];
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        setTransactions(updatedTransactions);
    }

    async function removeTransaction(id: number){
        const existingTransactionsString = localStorage.getItem('transactions');
        const existingTransactions = existingTransactionsString ? JSON.parse(existingTransactionsString) : [];
        
        const updatedTransactions = existingTransactions.filter((transaction: Transaction) => transaction.id !== id);
        
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

        setTransactions(updatedTransactions);
    };

    return(
       <TransactionsContext.Provider value={{ transactions, createTransaction, removeTransaction}}>
        {children}
       </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}

