import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import axios from "axios";
import {useState} from 'react';

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <RowPost />
      <button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
          (response) => {
            //console.log(response.data)
            setData(response.data);
          }
        )
      }}>Click Me</button>
      {
        data.map((entry, index)=>{
          return(
            <div>
              <span>{index+1}  <h4>{entry.title}</h4></span>
              <h5>{entry.body}</h5>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
