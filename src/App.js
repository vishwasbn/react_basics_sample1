import { useState } from 'react';

function App() {

  const [count, setCount] = useState(2);
  function addcount() {
    setCount(count + 1);
    console.log(count);
  }
  return (<div>
    <button onClick={addcount}>Add</button>
    <h1>Counter : {count}</h1>
  </div>

  );
}

export default App;
