import React from 'react';
import Modal from 'react-modal';
import './index.css';

Modal.setAppElement('#root');

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export default function ModalContainer({...props}){
    return <Modal
            isOpen={props.isOpen}
            styles={customStyles}
            contentLabel="Выбрать фильтры"
    >
        {props.children}
    </Modal>

}
