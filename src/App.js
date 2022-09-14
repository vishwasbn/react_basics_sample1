import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import axios from "./Axios";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { useState, useEffect } from "react";
import {  api_key } from "./Constants";
import {originals_url, movieGenre_url} from './Urls';
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
      <RowPost category='Netflix Originals' url={originals_url}/>
      {
        genre.map((item, index)=>{
          return(
            <RowPost key={item.id} isSmall category={item.name} url={movieGenre_url+item.id} />
          )
        })
      }
      
    </div>
  );
}

export default App;
