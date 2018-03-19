import parser from 'ua-parser-js';

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

navigator.mediaDevices.getUserMedia({ audio: false, video: true })
  .then(stream => {
    if ('srcObject' in Player) {
      Player.srcObject = stream;
    } else {
      Player.src = URL.createObjectURL(stream);
    }
  });

export default Player;
