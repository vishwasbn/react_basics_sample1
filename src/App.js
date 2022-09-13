import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import axios from "./Axios";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { useState, useEffect } from "react";
import {  api_key } from "./Constants";
function App() {
  const [genre, setGenre] = useState([])
  useEffect(()=>{
    axios.get(`genre/movie/list?api_key=${api_key}&language=en-US`)
    .then((response)=>{
      setGenre(response.data.genres);
    })
  },[])
  return (
    <div className="app">
      <NavBar />
      <Banner />
      {
        genre.map((item, index)=>{
          return(
            <RowPost category={item.name} id={item.id} key={item.id}/>
          )
        })
      }
      
    </div>
  );
}

export default App;
