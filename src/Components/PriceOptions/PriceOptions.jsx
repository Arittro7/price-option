import { useEffect, useState } from "react";
import Price from "../Price/Price";


const PriceOptions = () => {

  const [ prices, setPrices] = useState([]);

  useEffect(()=>{
    fetch('prices.json')
    .then(res => res.json())
    .then(data => setPrices(data));
  },[])

  return (
    <div>
      <h2 className="text-3xl">Available Packages {prices.length}</h2>
      <div className="grid md:grid-cols-3 gap-2">
      {
        prices.map(option =><Price key={prices.id} option={option}></Price> )
      }
      </div>
    </div>
  );
};



export default PriceOptions;