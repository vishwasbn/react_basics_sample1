import Footer from './footer/footer.js'
const company = 'Suyati';
function App() {
  var name = 'React JS';
  return (<div>
            <Header />
            <p> Hello World {name}</p>
            <Footer data={company}/>
          </div>

  );  
}

function Header() {
  return (<h1 style={{background:'red',color:'blue'}} >Hello my Name is Vishwas </h1>);
}

export default App;
