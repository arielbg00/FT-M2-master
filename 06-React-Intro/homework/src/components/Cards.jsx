import React from 'react';
import Card from "./Card";
import styles from "../styles/Cards.module.css";

export default function Cards(props) { // distructuring => Cards({cities})
  // props = {cities}
  // cities = [{}, {}, {}]
  // acá va tu código
  // tip, podés usar un map
  if (!props.cities) { // => (cities)
    return <h1>No hay ciudades</h1>
  }
  return (
    <div className={styles.container}>
      {
        props.cities && props.cities.map(city => ( // => cities && cities.map...
          <Card
            key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onclose={() => alert(city.name)}
          />
        ))
      }
    </div>
  )
};