import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./common/MoviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    selectedGenre: "All Genres",
    genres: [],
    sortColumn: { id: "title", order: "asc" }
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = [
      "All Genres",
      ...new Set(movies.map(movie => movie.genre.name))
    ];

    this.setState({ movies, genres });
  }

  handleFilter = selectedGenre => {
    this.setState({ selectedGenre, currentPage: 1 });
  };

  handlePageClick = currentPage => {
    this.setState({ currentPage });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  handleDelete = movieToDelete => {
    const movies = this.state.movies.filter(
      movie => movieToDelete._id !== movie._id
    );
    this.setState({ movies });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    if (this.state.movies.length === 0) return <div>No movies to display</div>;

    const {
      movies: allMovies,
      currentPage,
      selectedGenre,
      genres,
      sortColumn
    } = this.state;

    const { moviesPerPage } = this.props;

    const filteredMovies =
      selectedGenre === "All Genres"
        ? [...allMovies]
        : allMovies.filter(movie => movie.genre.name === selectedGenre);

    const sortedMovies = _.orderBy(
      filteredMovies,
      sortColumn.id,
      sortColumn.order
    );

    const moviesToDisplay = paginate(sortedMovies, moviesPerPage, currentPage);

    return (
      <div className="row">
        <div className="col-md-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onFilterChanged={this.handleFilter}
          />
        </div>
        <div className="col">
          <div style={{ margin: "0 0 21px 0" }}>
            Showing {filteredMovies.length} movies.
          </div>
          <MoviesTable
            movies={moviesToDisplay}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            totalItems={filteredMovies.length}
            itemsPerPage={moviesPerPage}
            currentPage={currentPage}
            onPageClick={this.handlePageClick}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
