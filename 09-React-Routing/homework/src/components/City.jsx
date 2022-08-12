import React from "react";
// import { useParams } from "react-router-dom";

/* class City extends React.Component{
    render() {
        return(
            <div>Hi</div>
        )
    }
} */

function City({city}) {

    // let params = useParams();
    // console.log(cityId);
    if (!city) {
        alert("The city dosen't exist");
        return(<div>The city dosen't exist</div>)
    }
    return(
        <div className="ciudad">
            <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} °C</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}°</div>
                    <div>Longitud: {city.longitud}°</div>
                </div>
            </div>
        </div>
    )
}

export default City;
