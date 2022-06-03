import { useEffect } from 'react';
import Rick from '../images/rick-menu.png';

function Menu({ play }) {
  useEffect(() => {
    const spans = document.querySelectorAll('span');

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      const span = spans[char];
      span.classList.remove('hidden');
      if (char === 41) {
        clearInterval(timer);
        setTimeout(() => {
          char++;
          setInterval(onTick, 50);
        }, 1000);
      } else char++;
      //stops the function from running once the end of the string has been reached
      if (char === spans.length) {
        complete();
        return;
      }
    }
    function complete() {
      setTimeout(() => {
        document
          .getElementById('play--btn')
          .classList.remove('hidden');
      }, 300);
      clearInterval(timer);
      timer = null;
    }
  });

  return (
    <div id="menu">
      <div id="menu-container">
        <img alt="Rick Sanchez looking at you weirdly" src={Rick} />
        <div id="delayed-text">
          <div className="column-wrapper">
            <span className="hidden">I</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">h</span>
            <span className="hidden">e</span>
            <span className="hidden">a</span>
            <span className="hidden">r</span>
            <span className="hidden">d</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">y</span>
            <span className="hidden">o</span>
            <span className="hidden">u</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">w</span>
            <span className="hidden">a</span>
            <span className="hidden">n</span>
            <span className="hidden">t</span>
            <span className="hidden">e</span>
            <span className="hidden">d</span>
          </div>
          <div className="column-wrapper">
            <span className="hidden">&nbsp;</span>
            <span className="hidden">t</span>
            <span className="hidden">o</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">t</span>
            <span className="hidden">e</span>
            <span className="hidden">s</span>
            <span className="hidden">t</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">y</span>
            <span className="hidden">o</span>
            <span className="hidden">u</span>
            <span className="hidden">r</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">m</span>
            <span className="hidden">e</span>
            <span className="hidden">m</span>
            <span className="hidden">o</span>
            <span className="hidden">r</span>
            <span className="hidden">y</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">.</span>
            <span className="hidden">.</span>
            <span className="hidden">.</span>
          </div>
          <div className="column-wrapper">
            <span className="hidden">Y</span>
            <span className="hidden">o</span>
            <span className="hidden">u</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">b</span>
            <span className="hidden">e</span>
            <span className="hidden">t</span>
            <span className="hidden">t</span>
            <span className="hidden">e</span>
            <span className="hidden">r</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">h</span>
            <span className="hidden">a</span>
            <span className="hidden">v</span>
            <span className="hidden">e</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">a</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">s</span>
            <span className="hidden">c</span>
            <span className="hidden">o</span>
            <span className="hidden">r</span>
            <span className="hidden">e</span>
          </div>
          <div className="column-wrapper">
            <span className="hidden">o</span>
            <span className="hidden">f</span>
            <span className="hidden">&nbsp;</span>
            <span className="hidden">1</span>
            <span className="hidden">2</span>
            <span className="hidden">!</span>
          </div>
        </div>
        <div onClick={play} className="hidden" id="play--btn">
          play
        </div>
      </div>
    </div>
  );
}

export default Menu;
