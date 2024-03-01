// components/VideoPlayer.js

const VideoPlayer = () => {
    return (
      <div>
        <video controls>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;