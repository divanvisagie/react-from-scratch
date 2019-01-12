import React from 'react'

import PropTypes from 'prop-types'

const Todo = ({ value }) => (<li>
    {value}
</li>)


Todo.propTypes = {
    value: PropTypes.string.isRequired
}

export default Todo