import {useContext} from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saidas.svg';
import totalImg from '../../assets/Total.svg';
import { TransactionsContext } from '../../TransactionsContext';


export function Summary(){

    const transactions = useContext(TransactionsContext)

    return(
        <Container>

            

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$3,00</strong>
            </div>
            
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$2,00</strong>
            </div>

            <div className='hightLight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$1,00</strong>
            </div>
        </Container>
    )
}