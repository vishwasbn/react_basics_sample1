import { useState } from 'react';
import './App.css'

function App() {

  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  return (<div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={() => { setToDoList([...toDoList, toDo]); setToDo(''); }} className="fas fa-plus"></i>
    </div>
    <div className="todos">

      {
        toDoList.map((entry, index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{entry}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>

          );
        })
      }


    </div>
  </div>
  );
}

export default App;
