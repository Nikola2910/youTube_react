import React, { Component, Fragment } from "react";
import axios from "axios";
import loader from "./img/loader.gif";
import "./App.scss";

import { Logo } from "./Components/Logo/Logo";
import { Search } from "./Components/Search/Search";
import { VideoList } from "./Components/VideoList/VideoList";
import { VideoPreview } from "./Components/VideoPreview/VideoPreview";

class App extends Component {
  state = {
    results: [],
    key: "AIzaSyBWueneDpHbbvKAg6BHenPY--qjzeMtMZc",
    idToPlay: "",
    loading: false
  };

  getSearchTerm = e => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    this.setState({
      loading: true
    });

    searchTerm
      ? axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&q=${searchTerm}&key=${this.state.key}`
          )
          .then(resolve => {
            const results = resolve.data.items;

            this.setState({
              results: results,
              idToPlay: "",
              loading: false
            });
          })
      : null;
  };

  getRelated = id => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId=${id}&type=video&key=${this.state.key}`
      )
      .then(resolve => {
        const results = resolve.data.items;
        this.setState({
          results: results
        });
      });
  };

  componentDidMount() {
    this.setState({
      idToPlay: this.state.idToPlay
    });
  }

  playVideo = id => {
    this.setState({
      idToPlay: id
    });
    console.log(id);
    console.log(this.state.idToPlay);
  };

  render() {
    const { idToPlay, loading } = this.state;
    return (
      <Fragment>
        <header>
          <div className="main-wrapper">
            <Logo />
            <Search getSearchTerm={this.getSearchTerm} />
          </div>
        </header>

        <main>
          {console.log(this.state.idToPlay)}
          <div className="main-wrapper">
            {this.state.idToPlay !== "" && <VideoPreview idToPlay={idToPlay} />}

            {loading ? (
              <img src={loader} className="loader" alt="loader" />
            ) : (
              <VideoList
                getRelated={id => {
                  this.getRelated(id);
                }}
                playVideo={id => {
                  this.playVideo(id);
                }}
                results={this.state.results}
              />
            )}
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
