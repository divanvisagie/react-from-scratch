import React from 'react'

import PropTypes from 'prop-types'


const Todo = ({ value }) => (<li className='Todo'>
    {value}
</li>)


Todo.propTypes = {
    value: PropTypes.string.isRequired
}

export default Todo