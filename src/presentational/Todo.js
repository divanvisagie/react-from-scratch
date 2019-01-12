import React from 'react'

import PropTypes from 'prop-types'


const Todo = ({ value, onClick }) => (<li className='Todo' onClick={onClick}>
    {value}
</li>)


Todo.propTypes = {
    value: PropTypes.string.isRequired
}

export default Todo