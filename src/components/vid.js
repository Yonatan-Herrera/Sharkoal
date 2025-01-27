import YouTube from 'react-youtube';
import React from 'react';
export default function BackGround(props) {
  const options = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      playlist: props.vid,
      loop: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <div className="flex justify-center my-2 size-full" style={{ z: -1 }}>
      <YouTube
        className="p-2"
        videoId={props.vid}
        opts={options}
        onReady={(event) => {
          event.target.playVideo();
        }}
        id="video"
      />
    </div>
  );
}
