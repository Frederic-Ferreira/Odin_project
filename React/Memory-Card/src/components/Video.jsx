import { useEffect, useState } from 'react';
import congrats from '../video/congrats.mp4';

function Video() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200);
  }, []);

  return (
    <div id="videoboard">
      {show && (
        <div className="video-container">
          <h1>Congrats ! 🎉</h1>
          <video autoPlay height="800px" width="800px">
            <source src={congrats} />
          </video>
          <h1>You're the king of shit! 👑</h1>
        </div>
      )}
    </div>
  );
}

export default Video;
