import React, { Component } from 'react';
import { fetchFilm } from '../actions/filmActions'
import AddFavorites from '../components/AddFavorites'
import { connect } from 'react-redux';

class FilmInfo extends Component {

  componentDidMount() {
    fetchFilm(this.props.match.params.id)(this.props.dispatch);
  }

  render() {
    console.log(this.props.film)
    return (
      <div className="filmInfo">
        <h1>{this.props.film.title}</h1>
        <h3>{this.props.film.tagline}</h3>
          <img src={`https://image.tmdb.org/t/p/w342${this.props.film.poster_path}`} alt="poster" />
            <div className="moreInfo">
              <AddFavorites />
              <h3>Synopsis</h3>
              <p>{this.props.film.overview}</p>
                <h3>Cast</h3>
                  <p>{this.props.credits.cast.slice(0, 18).map((cast, index) => {
                    return `${cast.name} as ${cast.character}`
                  }).join(" * ")}</p>
                <h3>Details | <a className="see-more" href={`https://www.themoviedb.org/movie/${this.props.film.id}`} target="_blank" rel="noopener noreferrer">See More Info</a></h3>
                  <p>{this.props.credits.crew.slice(0, 4).map((crew, index) => {
                    return `${crew.job}: ${crew.name}`}).join(", ")}</p>
                  <p>Release Date: {this.props.film.release_date} | Runtime: {this.props.film.runtime} Minutes</p>
                  <p>Genres: {this.props.genres.map((genre, index) => {
                    return genre.name
                  }).join(", ")}</p>
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    film: state.films.film.filmInfo,
    genres: state.films.film.genres,
    credits: state.films.film.credits
  }
}

export default connect(mapStateToProps)(FilmInfo)
