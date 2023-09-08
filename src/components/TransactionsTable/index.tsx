import { Content } from "./styles";
import {  useTransactions } from "../../hooks/useTransaction";

export function TransactionsTable(){
    const {transactions}= useTransactions()

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
                                <td>{
                                    new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format()
                                    }</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </Content>
    )
}