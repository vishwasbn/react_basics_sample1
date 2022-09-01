import { useState } from 'react';
import Counter from './Counter/Counter';

function App() {

  const [count, setCount] = useState(0);

  const obj1 = {
    title: 'First Counter :',
    counter: count
  }
  function addcount() {
    setCount(count + 1);
    console.log(count);
  }
  return (<div>
    <button onClick={addcount}>Add</button>
    <Counter {...obj1} />
    <Counter title="Second Counter :" counter={count} />
  </div>

  );
}

export default App;
