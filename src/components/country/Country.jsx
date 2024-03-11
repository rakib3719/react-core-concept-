
import { useState } from 'react';
import './Country.css'
const Country = ({country, mark}) => {
    console.log(country);
  const{name,flags, population
  } = country


  const [visit, setVisit] = useState(false);

  const visitHandle = ()=> {


    setVisit(!visit)
  }
 
    return (
        <div className= {visit ? "country-child2": "country-child"} >
          <h5 style={{
color: visit?"#e15f41": "black"



          }} >Country Name : {name.common}</h5>
          <h6>Official Name: {name.common.official}</h6>
          <img className='img' src={flags.png}  />
          <p>population: {population}</p>

          <button onClick={()=>{visitHandle (); mark(country)}} >  {visit ? "Visited": "Going"} </button>

          <p> {visit ? "Visited" : "Not Visit"} </p>




        </div>
    );
};

export default Country;