import YouTube from 'react-youtube';

export default function BackGround(props) {
  const options = {
    height: '390',
    width: '640',
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
    <div className="z-10 flex justify-center">
      <YouTube
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
