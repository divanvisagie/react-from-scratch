import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ReactDOM from 'react-dom'

import './ModalBox.css'

const ModalBox = ({open, content, onClose}) => {
    const parentClassName = open ? 'ModalBox--open' : 'ModalBox'

    console.log('ModalBox', parentClassName)

    console.log(content)
    return (
        <div className={parentClassName}>
            <div className='ModalBox-blocker' onClick={onClose}></div>
            <div className='ModalBox-body'>
                {content}
            </div>
        </div>
    )
}

let node = null
class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static getDerivedStateFromProps(next, prev) {
        if (node) {
            console.log('getDerivedStateFromProps', next)
            ReactDOM.render(<ModalBox {...next}/>, node)
        }
        return next
    }

    componentDidMount() {
        node = document.createElement('div')
        document.body.appendChild(node)

        console.log('componentDidMount', this.props)

        ReactDOM.render(<ModalBox {...this.props}/>, node)
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(node)
        if (node.parentNode) {
            node.parentNode.removeChild(node)
        }
    }

    render() {
        return (<script/>)
    }
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.string
}

export default Modal