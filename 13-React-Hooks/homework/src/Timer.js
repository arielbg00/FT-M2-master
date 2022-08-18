import React from 'react';
import "./Timer.css";

const Timer = () => {

  const [seconds, setSeconds] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const [type, setType] = React.useState("Contador"); // Contador y Cuenta Regresiva
  const myRef = React.useRef(null); // antes / e.target.value ==> ahora / myRef.current.value
  
  React.useEffect(() => {
    let interval = null;
    if (active && type === "Contador") {
      // incrementar en 1
      interval = setInterval(() => {
        setSeconds(prevState => prevState + 1);
      }, 1000);
    }
    if (active && type === "Cuenta Regresiva") {
      // restar en 1
      interval = setInterval(() => {setSeconds(prevState => prevState - 1);}, 1000);
    }
    if (!active && seconds !== 0 && type === "Contador") {
      clearInterval(interval);
    }
    if (seconds === 0 && type === "Cuenta Regresiva") {
      reset();
      clearInterval(interval);
    }
    // return no se ejecuta hasta que el componente no se desmonte!
    return () => clearInterval(interval);
  }, [seconds, active, type]);

  function toggle() {
    setActive(!active);
  }

  function reset() {
    setSeconds(0);
    setActive(false);
  }

  function changeType() {
    type === "Contador" ? setType("Cuenta Regresiva") : setType("Contador");
  }

  function addNumbers() {
    // const value = myRef.current.value;
    // setSeconds(value);
    setSeconds(myRef.current.value);
  }

  return (
    <div className="app">
      <div className="time">
        {seconds} s
      </div>
      <div className="row">
        <button className={`button-primary button-primary-${active ? "active" : "inactive"}`} onClick={toggle}>
          {active ? "Pausa" : "Inicio"}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={changeType}>
        {type}
      </button>
      {
        type === "Cuenta Regresiva" &&
        <input type="number" ref={myRef} onChange={addNumbers} placeholder="Ingresa Segundos" autoComplete="off" />
      }
    </div>
  );
};

export default Timer;
