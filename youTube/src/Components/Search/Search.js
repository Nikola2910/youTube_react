import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  render() {
    const { getSearchTerm } = this.props;

    return (
      <section className="search">
        <form onSubmit={getSearchTerm}>
          <input type="text" name="search" />
          <button>Search</button>
        </form>
      </section>
    );
  }
}

export { Search };
