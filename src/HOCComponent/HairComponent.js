import React from 'react'
import DataDisplay from './DataDisplay'
import Hoc from './Hoc'

const HairComponent = ({dataFetch,urlData}) => {
    console.log(urlData)
  return (
    <div>
        <button onClick={dataFetch}>Hair Component</button>
        <DataDisplay urlData={urlData}/>
    </div>
  )
}
const HairComp=Hoc(HairComponent,"https://dummyjson.com/users/filter?key=hair.color&value=Black")
export default HairComp