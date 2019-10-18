import React, { Component } from "react";

class Exercise extends Component {
  state = {
    movies: [
      { Title: "A", Genre: "a", Stock: 1, Rate: 1.1 },
      { Title: "B", Genre: "b", Stock: 2, Rate: 2.2 },
      { Title: "C", Genre: "c", Stock: 3, Rate: 3.3 },
      { Title: "D", Genre: "d", Stock: 4, Rate: 4.4 },
      { Title: "E", Genre: "e", Stock: 5, Rate: 5.5 },
      { Title: "F", Genre: "f", Stock: 6, Rate: 6.6 }
    ]
  };

  handleClick = movie => {
    let arr = this.state.movies.filter(x => x.Title !== movie.Title);
    this.setState({ movies: arr });
  };

  showMovies() {
    if (this.state.movies.length)
      return (
        <div>
          <h2>{`There are ${this.state.movies.length} movies`}</h2>
          <span>{this.showMember()}</span>
        </div>
      );

    if (!this.state.movies.length) return <p>{`There is no movies`}</p>;
  }

  render() {
    return <div>{this.showMovies()}</div>;
  }

  showMember() {
    return (
      <table>
        <thead className="table">
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie.Title}>
              <td>{movie.Title}</td>
              <td>{movie.Genre}</td>
              <td>{movie.Stock}</td>
              <td>{movie.Rate}</td>
              <td>
                <button
                  onClick={() => this.handleClick(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Exercise;
