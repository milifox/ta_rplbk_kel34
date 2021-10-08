import React from "react";
import './Modal.css';

const Modal = (props) => {
    return(
        <div className='modal-bg'>
            <div className='modal-container'>
                <div className='modal-button'>
                    <button onClick={() => props.closeModal(false)}> X </button>
                </div>
                <div className='modal-title'>{props.mTitle}</div>
                <div className='modal-img'>
                    <img src='http://placeimg.com/200/150/tech' alt='dummy'/>
                </div>
                <div className='modal-desc'>{props.mDesc}</div>

            </div>
        </div>
    )
}

export default Modal;