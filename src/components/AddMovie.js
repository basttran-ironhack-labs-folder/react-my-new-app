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

  genericOnChange(event) {
    // event.target is the <input> tag the onChange is linked to
    const { value, name } = event.target;
    // value is the text inside the <input> tag
    // name is the <input> tag's name attribute
    // use the variable "name" to set the key of the object
    console.log(value, name);
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // prevent the default page refresh you get when you submit a form
    event.preventDefault();

    this.props.movieSubmit(this.state);
    // clear the form by setting the state back to initial value
    // (REMEMBER to use SET STATE)
    this.setState({
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      hasOscars: false
    });
  }

  render() {
    return (
      <section className="AddMovie">
        <h2>Add a Movie</h2>
        {/* NO action and method on React forms
          (use an onSubmit event instead to handle the submission) */}
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            ID:
            <input
              // capture what is typed and keep it synchronized
              onChange={event => this.genericOnChange(event)}
              // value sets initial text and allows us to reset the text
              value={this.state._id}
              type="text"
              name="_id"
              placeholder="11k"
            />
          </label>
          <label>
            Title:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Titanic"
            />
          </label>
          <label>
            Director:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.director}
              type="text"
              name="director"
              placeholder="James Cameron"
            />
          </label>
          <label>
            IMDB Rating:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.imdbRating}
              type="number"
              name="imdbRating"
              placeholder="9"
            />
          </label>
          <button>Save This Movie</button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
