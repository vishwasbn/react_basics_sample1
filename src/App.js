import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import axios from "axios";

function App() {

  return (
    <div className="app">
      <NavBar />
      <Banner />
      <RowPost />
      <button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
          (response) => {
            console.log(response.data)
          }
        )
      }}>Click Me</button>
    </div>
  );
}

export default App;
