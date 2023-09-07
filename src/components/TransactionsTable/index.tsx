import { useEffect, useState } from "react";
import { Content } from "./styles";
import { api } from "../../services/api";

interface Transaction {
    id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    date: string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    
    useEffect( () => {
        api.get('transactions')
        .then(response => setTransactions(response.data))}
    , [])


    return(
        <Content>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.value)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.date)
                                    )}
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </Content>
    )
}