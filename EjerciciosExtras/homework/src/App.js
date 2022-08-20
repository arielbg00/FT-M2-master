import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
      <React.Fragment>
        <NavBar />
        <Route path="/filter/posts"></Route>
        <Route path="/"></Route>
        <Route path="/users/:id/posts"></Route>
        <Route path="/user/:userid/post/:id/coments"></Route>
      </React.Fragment>
  )
}

export default App
