import React, { Component } from "react";
import "./VideoPreview.scss";

class VideoPreview extends Component {
  render() {
    const { idToPlay } = this.props;

    const url = `https://www.youtube.com/embed/${idToPlay}`;
    console.log(url);
    return (
      <section className="video-preview">
        <iframe
          width="100%"
          height="720"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    );
  }
}

export { VideoPreview };
