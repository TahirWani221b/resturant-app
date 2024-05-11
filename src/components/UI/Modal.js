import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = ({ ...props }) => {
    return <div {...props} className={`${classes.backdrop}`}></div>
}

const ModalOverlay = props => {
    return (
        <div className={`${classes.modal}`}>
            <div className={`${classes.content}`}>{props.children}</div>
        </div>
    );
}
function Modal(props) {
    const portalElement = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={() => props.setShowCart(false)} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal