import { useState } from 'react';
import Employee from './Employee';

function App() {

  const [count, setCount] = useState(0);

  const emp = [{ name: 'Vishwas', age: '26' },
  { name: 'Nishanth', age: '18' },
  { name: 'Thanmay', age: '17' },
  { name: 'Chinnu', age: '16' }];

  function addcount() {
    setCount(count + 1);
    console.log(count);
  }

  return (<div className='header'>
    <button onClick={addcount}>Add</button>
    {
      emp.map((obj,index) => {
        return (<Employee key={index} {...obj} />)
      })
    }

  </div>

  );
}

export default App;
