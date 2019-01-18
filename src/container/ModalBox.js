
import React from 'react'
import './ModalBox.css'

export const ModalBox = ({ open, children, onClose }) => {
    const parentClassName = open ? 'ModalBox--open' : 'ModalBox'
    return (<div className={`ModalBox ${parentClassName}`}>
        <div className='ModalBox-blocker' onClick={onClose}></div>
        <div className='ModalBox-body'>
            {children}
        </div>
    </div>)
}
