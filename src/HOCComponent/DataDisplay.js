import React from 'react'
const DataDisplay = (props) => {
  if(props.urlData.length==0){
    <p>sfdsf</p>
  }
  else{
  return (
    <div id="outer">
     
     <table>
        <tr><th>Id</th><th>Name</th><th>Hair Color</th><th>Gender</th></tr>
        {props.urlData.map((item)=>{
          return(
            <>
            <tr><td>{item.id}</td><td>{item.firstName}</td><td>{item.hair.color}</td><td>{item.gender}</td></tr>
            </>
          )
        })}
        
     </table>
    </div>
  )
     
       
      }
}

export default DataDisplay