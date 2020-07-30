import React from 'react';
import '../../styles/components/subcomponents/Modal.css';

const Modal = () => {
    return (
        <div className="modal">
            <div className="spinner-border" role="status" id="custom-spinner">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
};

export default Modal;