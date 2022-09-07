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
      <i onClick={() => { setToDoList([...toDoList, { id: Date.now(), text: toDo, status: false }])
       setToDo('')}} className="fas fa-plus"></i>
    </div>
    <div className="todos">

      {
        toDoList.map((obj, index) => {
          return (
            <div className="todo" >
              <div className="left">
                <input onChange={(e) => {       
                  console.log(e.target.checked)          
                  setToDoList(toDoList.filter((obj2) => {
                    console.log(obj)
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                       
                      
                    }     
                    console.log(obj2)  
                    return obj2   
                    
                            
                  }))                  
                }}
                checked={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>

          );
        })
      }

{
        toDoList.map((obj, index) => {
          if(obj.status){
            return (
              <h1>{obj.text}</h1>  
            );
          }
          return null;
        })
      }


    </div>
  </div>
  );
}

export default App;
