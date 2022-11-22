import React from 'react'
import Hoc from './Hoc';
import DataDisplay from './DataDisplay';
const GenderComponent = ({dataFetch,urlData}) => {
    console.log(urlData);
  return (
    <div>
        <button onClick={dataFetch}>Geder Display</button>
        <DataDisplay urlData={urlData}/>
    </div>
  )
}
const GenderComp=Hoc(GenderComponent,"https://dummyjson.com/users/filter?key=gender&value=male") 
export default GenderComp