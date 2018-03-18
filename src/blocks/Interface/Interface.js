import * as PIXI from 'pixi.js';
import parser from 'ua-parser-js';

import './Interface.css';

const Interface = new PIXI.Container();
const ticker = PIXI.ticker.shared;

const textOptions = {
  fontFamily: 'Menlo, Monaco, monospace',
  fontSize: 10,
  fill: 0xffffff
};

const textFPS = new PIXI.Text('', textOptions);
textFPS.position.set(20);

const textUA = new PIXI.Text('', textOptions);
textUA.position.set(20, 425);

Interface.addChild(
  textFPS,
  textUA
);

const animate = () => {
  const fps = ticker.FPS.toFixed(3).toString().toUpperCase();
  const ua = parser(window.navigator.userAgent);
  const os = `${ua.os.name} ${ua.os.version}`.toUpperCase();
  const engine = `${ua.engine.name} ${ua.engine.version}`.toUpperCase();
  const browser = `${ua.browser.name} ${ua.browser.version}`.toUpperCase();

  textFPS.text = `FPS: ${fps}`;
  textUA.text = `OS: ${os}\nENGINE: ${engine}\nBROWSER: ${browser}`;

  setTimeout(animate, 100);
};

animate();

export default Interface;
