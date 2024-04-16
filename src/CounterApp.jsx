import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSubstract = () => {
        setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(value)
    }

  return (
    <>
        <p data-testid='test-value'>{counter}</p>
        <button onClick={handleAdd}>sumar +1</button>
        <button onClick={handleSubstract}>restar -1</button>
        <button aria-label='btn-reset' onClick={handleReset}>reset</button>
    </>
  )
}
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp