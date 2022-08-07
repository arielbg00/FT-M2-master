import React from 'react';
import s from "../styles/SearchBar.module.css";
import Button from 'react-bootstrap/Button';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={s.container}>
      <input type="text" placeholder="Ciudad..." />
      <button onClick={() => props.onSearch("Buscando Ciudad")} className={s.btn}>Agregar</button>
      <Button variant="primary" onClick={() => props.onSearch("Buscando Ciudad")}>Agregar</Button>
    </div>
  )
};