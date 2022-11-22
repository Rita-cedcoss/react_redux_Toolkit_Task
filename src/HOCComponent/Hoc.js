import React, {useState } from 'react'

const Hoc = (Component,url) => {
    
    function ApiFetchData()
    {
        const [urlData,setUrlData]=useState([])
       const dataFetch=()=>{
           fetch(url)
           .then(res=>res.json())
           .then((data)=>{
            console.log(data.users)
            setUrlData(data.users)
        
           })
        }

       return <Component urlData={urlData} dataFetch={dataFetch}/>
    }
    return ApiFetchData
}

export default Hoc