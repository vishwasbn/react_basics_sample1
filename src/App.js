import { useState } from 'react';
import Counter from './Counter/Counter';

function App() {

  const [count, setCount] = useState(0);
  function addcount() {
    setCount(count + 1);
    console.log(count);
  }
  return (<div>
    <button onClick={addcount}>Add</button>
    <Counter counter={count}/>    
  </div>

  );
}

export default App;
