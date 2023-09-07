import { useContext} from "react";
import { Content } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";



export function TransactionsTable(){
    const transactions= useContext(TransactionsContext)
    

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
                                <td>{transaction.date}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </Content>
    )
}