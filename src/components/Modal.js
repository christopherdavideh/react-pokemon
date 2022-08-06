import React from "react";
import ReactDOM from "react-dom";
import '../css/modal.css'


function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="modal-background">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};