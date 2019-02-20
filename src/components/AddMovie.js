import React, { Component } from "react";

import "./AddMovie.css";

// Controlled components where inputs are synchronized with the state
class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      hasOscars: false
    };
  }

  synchronizedId(event) {
    console.log(event.target);
    this.setState({ _id: event.target.value });
  }

  synchronizedTitle(event) {
    console.log(event.target);
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <section className="AddMovie">
        <h2>Add a Movie</h2>
        <form>
          <label>
            ID:
            <input
              onChange={event => this.synchronizedId(event)}
              type="text"
              name="_id"
              placeholder="11k"
            />
          </label>
          <label>
            Title:
            <input
              onChange={event => this.synchronizedTitle(event)}
              type="text"
              name="title"
              placeholder="Titanic"
            />
          </label>
          <label>
            Director:
            <input type="text" name="director" placeholder="James Cameron" />
          </label>
          <label>
            IMDB Rating:
            <input type="number" name="imdbRating" placeholder="9" />
          </label>
          <button onClick={() => this.toggleOscarFilter()}>
            Save This Movie
          </button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
