import React, { useState, useEffect } from 'react'

function Component() {

    var [count, setCount] = useState(0);
    var [count2, setCount2] = useState(0);

    useEffect(()=>{
        console.log('Mounting....'); 
        console.log('Count 1...'+count);      
        console.log('Count 2...'+count2);   
        return ()=>{
            console.log('Cleanup'+count+' '+count2);
        }
    },[count])
    
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>Increment </button>
            <h1>This is Component 1 {count}</h1>

            <button onClick={()=>{setCount2(count2+1)}}>Increment </button>
            <h1>This is Component 2 {count2}</h1>
        </div>
    )
}

export default Component