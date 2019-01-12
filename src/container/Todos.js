import React, {Component} from 'react'
import Todo from '../presentational/Todo'

class Todos extends Component {
    constructor() {
        super()

        this.state = {
            todos: ['Preloaded']
        }

        this.handleAddTodo = this.handleAddTodo.bind(this)
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
        this.inputRef.current.value = "" //clear the input

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

    render() {
        const {todos} = this.state
        return (
            <div>
                <ul>
                    {todos.map((x,i) => 
                        <Todo key={i} value={x}/>
                    )}
                </ul>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.handleAddTodo}>Add</button>
            </div>
        )
    }

}

export default Todos
