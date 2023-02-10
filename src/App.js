import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
          <h3>Country App Made By: Talha Jubair</h3>
            <Countries></Countries>
            <Country></Country>
          </div>
        </div>
      </header>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])

//   return(
//     <div>
//     {
//       countries.map(country => <Country name={country.name.common} flags={country.flags.png} />)
//     }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h4>Country Name: {props.name}</h4>
//       <img src={props.flags} alt="" />
//     </div>
//   )
// }

export default App;
