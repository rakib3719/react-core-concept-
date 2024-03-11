import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css"




const Countries = () => {


const [marks, setMarks] = useState([])

const mark = (props) => {
    const existingMark = marks.find((mark) => mark.name.common === props.name.common);
  
    if (!existingMark) {
      const newMark = [...marks, props];
      setMarks(newMark);
    }
  };
  



const [country, setCountry] = useState([]);


useEffect(()=> {
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => setCountry(data))


}, [])

    return (
        <div>

          <div style={{

            textAlign : "center"
          }} >


<h4>Total Visit : {marks.length} </h4>
<ul>

{

    marks.map(mark => <li key={mark.name.common} > Country Name: {mark.name.common} <img className="img2" src={mark.flags.png} alt="" />  </li>  ) 
}



</ul>


          </div>
     
<div className="country" >


{

country.map(datas => <Country mark={mark} key={datas.cca3} country= {datas} ></Country>)

}
</div>
        </div>
    );
};

export default Countries;