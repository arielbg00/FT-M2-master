import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies } from "../../actions";
import { addMovieFavorite } from "../../actions";



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    // this.setState(prev => {...prev, title: event.target.value});
    this.setState({ title: event.target.value }); // si tengo una propiedad no usar spreed operator
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    // recibo this.props.getMovies por mapDispatchToProps
  }

  render() {
    const { title } = this.state; // destructuring
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {
            this.props.movies && this.props.movies.map(movie => (
              // movie.imdbID lo busco en internet o en action.payload.Search
              <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  {/* movie.Title lo busco en action.payload.Search */}
                  {movie.Title} 
                </Link>
                <button onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>FAV</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded  // ==> this.props.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: title => dispatch(getMovies(title)), // import getMovies(title)
    addMovieFavorite: title => dispatch(addMovieFavorite(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
