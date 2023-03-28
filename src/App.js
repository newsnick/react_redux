import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './component/Counter/Counter'

const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { ...state, count: state.count + 1 }
    case 'MINUS':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

export default App
