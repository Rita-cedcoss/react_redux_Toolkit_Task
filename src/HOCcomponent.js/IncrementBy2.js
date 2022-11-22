import React from 'react'
import Hoc from './Hoc'

const IncrementBy2 = ({increment,count}) => {
    return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>IncrementBy2</button>
    </div>
  )
}
const IncrementBy2Component=Hoc(IncrementBy2,2);
export default IncrementBy2Component