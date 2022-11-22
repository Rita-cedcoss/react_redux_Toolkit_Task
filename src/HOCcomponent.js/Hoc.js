import React, { useState } from 'react'

const Hoc = (Component,Value) => {
    
    function Counter()
    { 
        const [count,setCount]=useState(0);
        const increment=()=>{
            setCount(count+Value);
        }  
        return<Component count={count} increment={increment}/>
    }

    return Counter
}

export default Hoc