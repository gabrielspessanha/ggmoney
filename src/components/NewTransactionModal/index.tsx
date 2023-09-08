import Modal from 'react-modal';
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/api';
import { TransactionsContext, useTransactions } from '../../hooks/useTransaction';

import closeImg from '../../assets/close.svg';
import outcomeImg from '../../assets/Saidas.svg';
import incomeImg from '../../assets/Entradas.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalprops{
    isOpen: boolean;
    onRequestClose: () => void;
    isactive?: boolean;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalprops){
    //const { createTransaction } = useTransactions()
    const { createTransaction }= useContext(TransactionsContext)


    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        
        await createTransaction({
            title,
            value,
            category,
            type
        })

        setTitle('')
        setValue(0)
        setCategory('')
        setType('deposit')
        onRequestClose();
    }

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <button 
            type='button' 
            onClick={onRequestClose} 
            className='react-modal-close'
        >
            <img src={closeImg} alt='Fechar modal' />
        
        </button>
        
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            
            <input 
                placeholder='Titulo'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="Number"
                placeholder='Valor'
                value={value}
                onChange={event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                    type='button'
                    onClick={() => {setType('deposit'); }}
                    isactive={type === 'deposit' ? 'true' : 'false'}
                    activecolor="green"
                >
                    <img src={incomeImg} alt='Entrada'/>
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type='button'
                    onClick={() => {setType('withdraw'); }}
                    isactive={type === 'withdraw' ? 'true' : 'false'}
                    activecolor="red"
                >
                    <img src={outcomeImg} alt='Saida'/>
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeContainer>



            <input 
                placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
          

          
      </Modal>
    )
}