import React from 'react'
import Hoc from './Hoc'

const IncrementBy10 = ({increment,count}) => {
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>IncrementBy10</button>
    </div>
  )
}
const IncrementBy10Copmonent=Hoc(IncrementBy10,10)
export default IncrementBy10Copmonent