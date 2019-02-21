import React, { Component } from "react";
import "./MovieList.css";
import AddMovie from "./AddMovie.js";

function longRatingText(movie) {
  if (movie.hasOscars && movie.imdbRating >= 9) {
    return <p>🤯 Mindblowing film! Rating is {movie.imdbRating}</p>;
  } else if (movie.hasOscars && movie.imdbRating >= 7) {
    return (
      <p>
        😮 Solid film! Has Oscars and a respectable rating of {movie.imdbRating}
      </p>
    );
  } else {
    return <p>Rating is {movie.imdbRating}</p>;
  }
}

class MovieList extends Component {
  constructor(props) {
    super(props);

    // initial state for ONLY when you need state
    this.state = {
      showOscarFilmsOnly: false,
      movieArray: [
        {
          _id: "7g",

          title: "The Godfather",

          director: "Francis Coppola",

          imdbRating: 9.2,

          hasOscars: true
        },

        {
          _id: "8h",

          title: "Star Wars",

          director: "George Lucas",

          imdbRating: 8.7,

          hasOscars: true
        },

        {
          _id: "9i",

          title: "The Shawshank Redemption",

          director: "Frank Darabont",

          imdbRating: 9.3,

          hasOscars: false
        },

        {
          _id: "10j",

          title: "Glitter",

          director: "Vondie Curtis-Hall",

          imdbRating: 2.2,

          hasOscars: false
        }
      ]
    };
  }
  deleteMovie(index) {
    // update the array
    const movies = this.state.movieArray;
    movies.splice(index, 1);

    // setState({ animalArray: animals })
    this.setState({ movieArray: movies });
  }

  toggleOscarFilter() {
    // update the array
    const currentShow = this.state.showOscarFilmsOnly;
    this.setState({ showOscarFilmsOnly: !currentShow });
  }

  addNewMovie(movieObject) {
    const movies = this.state.movieArray;
    // update the array (add at the beginning so we don't need to scroll for feedback)
    movies.unshift(movieObject);

    // save the new array in the state to render the component again
    this.setState({ movieArray: movies });
  }

  render() {
    const { movieArray, showOscarFilmsOnly } = this.state;
    return (
      <section className="MovieList">
        <h2>Movie List Example</h2>
        {/* send our addNewMovie() method as a PROP named movieSubmit */}
        <AddMovie movieSubmit={movieObject => this.addNewMovie(movieObject)} />
        <button onClick={() => this.toggleOscarFilter()}>
          Show {showOscarFilmsOnly ? "All Films" : "Oscar Winners Only"}
        </button>
        <ul>
          {movieArray.map((oneMovie, index) => {
            return (
              (!showOscarFilmsOnly || oneMovie.hasOscars) && (
                <li key={oneMovie._id}>
                  <h3>{oneMovie.title}</h3>
                  <p>Directed by {oneMovie.director}</p>

                  {/* if the movie has won oscars */}
                  {oneMovie.hasOscars ? (
                    <p>Oscar winning film \o/ 🏆.</p>
                  ) : (
                    <p>Great film but no Oscars :/ 😕</p>
                  )}

                  {/* if the rating is less than 4 */}
                  {oneMovie.imdbRating < 4 && <p>This movie is 💩.</p>}

                  {longRatingText(oneMovie)}

                  <button onClick={() => this.deleteMovie(index)}>
                    Delete
                  </button>
                </li>
              )
            );
          })}
        </ul>
      </section>
    );
  }
}

export default MovieList;
