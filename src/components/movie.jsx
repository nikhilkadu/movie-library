import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Movie extends Form {
  state = {
    userInput: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: []
  };

  schema = {
    _id: Joi.string().allow(""),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(50)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(50)
      .label("Rate")
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieID = this.props.match.params.id;
    if (movieID === "add") return;

    const movieObj = getMovie(movieID);
    if (!movieObj) this.props.history.replace("/not-found");

    const userInput = {
      _id: movieObj._id,
      title: movieObj.title,
      genreId: movieObj.genre._id,
      numberInStock: movieObj.numberInStock,
      dailyRentalRate: movieObj.dailyRentalRate
    };
    this.setState({ userInput });
  }

  submitAction = () => {
    saveMovie(this.state.userInput);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          {this.renderInputField("title", "Title")}
          {this.renderDropDown("genreId", "Genre", this.state.genres)}
          {this.renderInputField("numberInStock", "Number In Stock")}
          {this.renderInputField("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default Movie;
