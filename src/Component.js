import React, { useState, useEffect } from 'react'

function Component() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Mounting....'); 
        console.log('Updating...'+count);      
    },[count])
    
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>Increment </button>
            <h1>This is Component {count}</h1>
        </div>
    )
}

export default Component