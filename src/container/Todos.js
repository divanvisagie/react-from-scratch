import React, {Component} from 'react'
import Todo from '../presentational/Todo'

import Modal from './Modal'

import './TodoDetail.css'


const TodoDetail = ({content, onClose}) => (
    <div className="TodoDetail">
        <h3>Selected Item</h3>

        <p className="TodoDetail-body">
            {content}
        </p>

        <button onClick={onClose}>Close</button>
    </div>
)

class Todos extends Component {
    constructor() {
        super()

        this.state = {
            open: false,
            todos: ['Preloaded']
        }

        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.onOpen = this.onOpen.bind(this)
        this.onClose = this.onClose.bind(this)

        this.inputRef = React.createRef() 
    }
    
    async componentDidMount() {
        const response = await fetch('/todo')
        if (!response.ok) {
            return
        }

        const todos = await response.json()
        this.setState({todos})
    }

    async handleAddTodo(event) {

        const todo = this.inputRef.current.value
        this.inputRef.current.value = '' //clear the input

        const response = await fetch('/todo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({todo})
        })
        if (!response.ok) {//Add to local if cant find server
            this.setState({
                todos: [...this.state.todos, todo]
            })
            return
        }

        const todos = await response.json()
        this.setState({todos})

    }

    onOpen(item) {
        console.log('on open')
        const state = Object.assign({}, this.state, { open: true, selectedItem: item})
        this.setState(state)
    }

    onClose() {
        const state = Object.assign({}, this.state, { open: false })
        this.setState(state)
    }

    render() {
        const {todos, open, selectedItem} = this.state
        return (
            <div className='Todos'>
                <ul>
                    {todos.map((x,i) => 
                        <Todo key={i} value={x} onClick={() => this.onOpen(x)}/>
                    )}
                </ul>
                <input type='text' ref={this.inputRef}></input>
                <button className="button-with-input-left" onClick={this.handleAddTodo}>Add</button>
                <Modal 
                    open={open}
                    onClose={this.onClose}
                >
                    <TodoDetail content={selectedItem} onClose={this.onClose}></TodoDetail>
                </Modal>
            </div>
        )
    }

}

export default Todos
