import React,{useState} from 'react'

function Component() {
    const [count, setCount] = useState(0);
  return (
    <div style={{fontSize:'x-large',fontWeight:'bold'}}>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>This is a component {count}</h1>
    </div>
  )
}

export default Component