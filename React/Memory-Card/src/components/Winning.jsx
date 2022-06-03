import { useEffect, useState } from 'react';
import congrats from '../video/congrats.mp4';

function Winning({ replay }) {
  const [showCongrats, setShowCongrats] = useState(false);
  const [showReplay, setShowReplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCongrats(true);
    }, 200);
  }, []);

  useEffect(() => {
    if (!document.querySelector('video')) return;

    const video = document.querySelector('video');
    video.addEventListener('ended', () => {
      setShowCongrats(false);
      setShowReplay(true);
    });
  });

  return (
    <div id="videoboard">
      {showCongrats && (
        <div id="video-container">
          <h1>Congrats ! 🎉</h1>
          <video autoPlay height="80%" width="80%">
            <source src={congrats} />
          </video>
          <h1>You're the king of shit! 👑</h1>
        </div>
      )}
      {showReplay && (
        <div id="play-again">
          <h1>Do you want to keep testing your memory?</h1>
          <div onClick={replay} id="play-again--btn">
            play again
          </div>
        </div>
      )}
    </div>
  );
}

export default Winning;
