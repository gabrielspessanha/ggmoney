import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalprops{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalprops){
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <Container>
            <h2>Cadastrar Transação</h2>
            
            <input 
                placeholder='Titulo'
            />

            <input 
                type="Number"
                placeholder='Valor'
            />

            <input 
                placeholder='Categoria'
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
          

          
      </Modal>
    )
}