import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    
    componentDidMount() {
        // Route da tres propiedades: match, location y history
        const movieID = this.props.match.params.id; // ==> /movie/:id
        this.props.getMovieDetail(movieID); // aca se despacha la accion => se llena el stado de movieDetail
    }

    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movie.Title}</h1>
                <h2>{this.props.movie.Year}</h2>
                <h2>{this.props.movie.Rated}</h2>
                <h2>{this.props.movie.Released}</h2>
                <h2>{this.props.movie.Genre}</h2>
                <img src={this.props.movie.Poster} alt="" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);