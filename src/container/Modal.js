import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactDOM from 'react-dom'

import './ModalBox.css'
import { ModalBox } from './ModalBox';

let portalRoot = document.getElementById('portal')
class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.el = document.createElement('div')
    }

    componentDidMount() {
        portalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        portalRoot.removeChild(portalRoot)
    }

    render() {
        const {children} = this.props
        return ReactDOM.createPortal(<ModalBox {...this.props}> {children} </ModalBox> , this.el)
    }
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.string
}

export default Modal