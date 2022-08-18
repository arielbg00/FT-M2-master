export function getMovies(title) {
  return function(dispatch) {
    // return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&s=" + title)
    return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
      .then(response => response.json())
      .then(movies => dispatch({type: "GET_MOVIES", payload: movies}))
  }
}

export function getMovieDetail(id) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
      .then(response => response.json())
      .then(detail => dispatch({type: "GET_MOVIE_DETAIL", payload: detail}))
  }
}

export function addMovieFavorite(movie) { // movie = {title: movie.Title, id: movie.imdbID}
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload: movie
  }
}

export function removeMovieFavorite(id) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    id
  }
}