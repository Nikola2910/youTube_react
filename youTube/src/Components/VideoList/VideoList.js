import React, { Component } from "react";

import "./VideoList.scss";

import { Video } from "../Video/Video";

class VideoList extends Component {
  render() {
    const { results, getRelated, playVideo } = this.props;

    return (
      <section className="video-list">
        <Video
          getRelated={id => {
            getRelated(id);
          }}
          playVideo={id => {
            playVideo(id);
          }}
          results={results}
        />
      </section>
    );
  }
}

export { VideoList };
