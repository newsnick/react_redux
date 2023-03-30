import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List Example</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TodoList)
