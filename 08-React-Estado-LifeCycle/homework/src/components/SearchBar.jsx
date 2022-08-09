import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city} // valor del input = initialState
        onChange={e => setCity(e.target.value)} // onChange es un evento, parametro e = al evento
        // si hay un cambio (un evento) se ejecuta onChange, onChange = funct, y funct cambia el estado
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
