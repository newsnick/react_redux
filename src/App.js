import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './component/Counter/Counter'
import TodoList from './component/TodoList/TodoList'

// const initialState = {
//   count: 0,
// }

const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux' },
    { id: 2, text: 'Learn to build todo lists' },
    { id: 3, text: 'Learn Redux-todos' },
    { id: 4, text: 'todo-list Redux' },
    { id: 5, text: 'build todo lists' },
    { id: 6, text: 'Redux todos lists are awesome' },
    { id: 7, text: 'make a Redux todo list' },
    { id: 8, text: 'Sample Redux todo lists' },
    { id: 9, text: 'Redux sample todo lists' },
    { id: 10, text: 'Redux todo lists' },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'PLUS':
    //   return { ...state, count: state.count + 1 }
    // case 'MINUS':
    //   return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    {/* <Counter /> */}
    <TodoList />
  </Provider>
)

export default App
