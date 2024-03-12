import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/country';

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log(country);
    console.log('add this');
    setVisitedCountries([...visitedCountries, country]);
  };

  return (
    <>
      <h1>React World Tour</h1>
      <h2>Total countries: {countries.length}</h2>
      <div style={{ border: '1px solid yellowgreen', width: '20%', padding: '15px', borderRadius: '15px' }}>
        <h2 style={{ padding: '0px', margin: '0px' }}>Visited Countries: {visitedCountries.length} </h2>
        <ul>
          {visitedCountries.map((country, i) => (
            <li key={i}>{country}</li>
          ))}
        </ul>
      </div>
      <div className="country__grid-display">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries} />
        ))}
      </div>
    </>
  );
}

export default App;
