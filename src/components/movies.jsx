import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    selectedGenre: "All Genres",
    genres: [],
    sortColumn: { id: "displayTitle", order: "asc" },
    searchText: ""
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = [
      "All Genres",
      ...new Set(movies.map(movie => movie.genre.name))
    ];

    this.setState({ movies, genres });
  }

  handleSearch = ({ currentTarget }) => {
    this.setState({
      selectedGenre: "All Genres",
      searchText: currentTarget.value
    });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleFilter = selectedGenre => {
    this.setState({ selectedGenre, searchText: "", currentPage: 1 });
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

  getPagedData() {
    const {
      movies: allMovies,
      currentPage,
      selectedGenre,
      sortColumn,
      searchText
    } = this.state;

    const { moviesPerPage } = this.props;

    let filteredMovies = [...allMovies];
    if (searchText !== "") {
      filteredMovies = filteredMovies.filter(movie =>
        movie.title.match(new RegExp(searchText, "i"))
      );
    } else if (selectedGenre !== "All Genres") {
      filteredMovies = allMovies.filter(
        movie => movie.genre.name === selectedGenre
      );
    }

    const sortedMovies = _.orderBy(
      filteredMovies,
      sortColumn.id,
      sortColumn.order
    );

    const pagedMovieData = paginate(sortedMovies, moviesPerPage, currentPage);
    const totalFilteredMovies = filteredMovies.length;

    return { totalFilteredMovies, pagedMovieData };
  }

  render() {
    if (this.state.movies.length === 0) return <div>No movies to display</div>;

    const { moviesPerPage } = this.props;
    const {
      currentPage,
      selectedGenre,
      genres,
      sortColumn,
      searchText
    } = this.state;
    const { totalFilteredMovies, pagedMovieData } = this.getPagedData();

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
            <span className="search-box">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleSearch}
                value={searchText}
              />
            </span>
            <span>{totalFilteredMovies} movies</span>
            <span className="add-button">
              <Link className="btn btn-primary" to="/movies/add" role="button">
                Add
              </Link>
            </span>
          </div>
          <MoviesTable
            movies={pagedMovieData}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            totalItems={totalFilteredMovies}
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
