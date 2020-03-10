import React, { Component, Fragment } from "react";
import "./Video.scss";
import uuid from "react-uuid";
class Video extends Component {
  render() {
    const { results, getRelated, playVideo } = this.props;

    return (
      <Fragment>
        {results.map(result => {
          return (
            <div className="video" key={uuid()}>
              <div className="img-wrapper">
                <img
                  onClick={() => {
                    getRelated(result.id.videoId);
                    playVideo(result.id.videoId);
                  }}
                  src={result.snippet.thumbnails.medium.url}
                  alt=""
                />
              </div>

              <section>
                <h3
                  onClick={() => {
                    getRelated(result.id.videoId);
                    playVideo(result.id.videoId);
                  }}
                >
                  {result.snippet.title}
                </h3>
                <div className="description">{result.snippet.description}</div>
              </section>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export { Video };
