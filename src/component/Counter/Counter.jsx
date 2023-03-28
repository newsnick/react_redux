import React from 'react'
import { connect } from 'react-redux'

const plusCounter = () => ({
  type: 'PLUS',
})

const minusCounter = () => ({
  type: 'MINUS',
})

const Counter = ({ count, plusCounter, minusCounter }) => (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={minusCounter}>plus</button>
    <button onClick={plusCounter}>minus</button>
  </div>
)

const mapStateToProps = (state) => ({
  count: state.count,
})

const mapDispatchToProps = {
  plusCounter,
  minusCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
