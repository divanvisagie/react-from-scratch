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
        const todos = await response.json()
        this.setState({todos})
    }

    handleAddTodo(event) {
        

        this.setState({
            todos: [...this.state.todos, this.inputRef.current.value]
        })

        this.inputRef.current.value = ""


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
