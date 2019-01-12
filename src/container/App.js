import React, {Component} from 'react'

import Todos from './Todos'

class App extends Component {

    constructor() {
        super()

        this.state = { count: 1 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        console.log('Recieved click from', e.target)
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        console.log('Rendering with args', arguments)
        return (
            <div className='App'>
                <header>
                    React Todo App
                </header>
                
                <Todos></Todos>
            </div>
        )
    }
}

export default App