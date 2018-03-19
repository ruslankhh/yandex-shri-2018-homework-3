import parser from 'ua-parser-js';

import './Player.css';

const Player = document.createElement('video');
const ua = parser(window.navigator.userAgent);

Player.className = `Player Player--browser-${ua.browser.name.toLowerCase()}`;
Player.width = 640;
Player.height = 480;
Player.autoplay = true;
Player.defaultMuted = true;
Player.preload = true;

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(stream => {
    try {
      Player.srcObject = stream;
    } catch (error) {
      Player.src = URL.createObjectURL(stream);
    }
  });

export default Player;
