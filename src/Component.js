import React, { useState, useEffect } from 'react'

function Component() {
    useEffect(()=>{
        console.log('Mounting....');       
    },[])
    const [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>Increment </button>
            <h1>This is Component {count}</h1>
        </div>
    )
}

export default Component