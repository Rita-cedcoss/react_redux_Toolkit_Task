import React from 'react'
import Hoc from './Hoc'
const CounterComponent = ({increment,count}) => {
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Counter</button>
    </div>
  )
}
const CouterComp=Hoc(CounterComponent,5)

export default CouterComp