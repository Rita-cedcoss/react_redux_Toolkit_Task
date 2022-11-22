import React from 'react'
import Hoc from './Hoc'
import DataDisplay from './DataDisplay';
const AgeComponent = ({dataFetch,urlData}) => {
    console.log(urlData);
    return (
    <div>
        <button onClick={dataFetch}>apiFetchData</button>
        <DataDisplay urlData={urlData}/>
    </div>
  
  )
}
const AgeComponent1=Hoc(AgeComponent,"https://dummyjson.com/users/filter?key=age&value=30")
export default AgeComponent1