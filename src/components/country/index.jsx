import { useState } from 'react';
import './country.css';
export default function Country({ country, handleVisitedCountries }) {
  const { name, flags, area, population, cca3 } = country;

  const [isVisited, setIsVisited] = useState(false);

  console.log(handleVisitedCountries);

  const handleVisitedBtn = () => {
    setIsVisited(!isVisited);

    handleVisitedCountries(name.common);
  };

  return (
    <div className={`country ${isVisited && 'visited'} `}>
      <h3>Country: {name.common} </h3>
      <img src={flags?.png} alt={flags?.alt} />
      <h4>Area: {area} </h4>
      <h4>Population: {population} </h4>
      <p>
        <code>Code: {cca3}</code>
      </p>
      <button style={{ color: isVisited && 'greenyellow' }} onClick={handleVisitedBtn}>
        {isVisited ? 'Visited' : 'Not Visited'}
      </button>
    </div>
  );
}
