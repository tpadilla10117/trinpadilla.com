import React, { useEffect, useRef } from 'react';
import styles from './Modal.scss';

const Modal = ( {children, onModalClose} ) => {

    const modalReference = useRef(null);


    return (
        <div className={styles.ModalContainer} role="dialog" aria-modal="true">
            <div className={styles.ModalContent} ref={modalReference}>
                <div className={styles.ModalHeader}>
                    <button className={styles.CloseBtn} title="Close modal" onClick={onModalClose}>
                        x
                    </button>
                </div>
                {children}
            </div>
        </div>
    )

}

export default Modal;