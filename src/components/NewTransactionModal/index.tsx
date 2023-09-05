import Modal from 'react-modal';

interface NewTransactionModalprops{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalprops){
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        >
          <h2>Cadastrar Transação</h2>

          
      </Modal>
    )
}