import parser from 'ua-parser-js';

import Camera from '../Camera/Camera';
import './Player.css';

const Player = document.createElement('video');
const ua = parser(window.navigator.userAgent);
const browser = ua.browser.name.toLowerCase();

Player.className = `Player Player--browser-${browser}`;
Player.width = 640;
Player.height = 480;
Player.autoplay = true;
Player.defaultMuted = true;
Player.preload = true;

Camera.getUserMedia()
  .then(stream => {
    if ('srcObject' in Player) {
      Player.srcObject = stream;
    } else {
      Player.src = URL.createObjectURL(stream);
    }

    return stream;
  });

export default Player;
