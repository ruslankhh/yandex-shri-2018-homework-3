import * as PIXI from 'pixi.js';
import parser from 'ua-parser-js';

const InterfaceUserAgent = new PIXI.Text('', {
  fontFamily: 'Menlo, Monaco, monospace',
  fontSize: 10,
  fill: 0xffffff
});

InterfaceUserAgent.position.set(20, 420);

const animate = () => {
  const ua = parser(window.navigator.userAgent);
  const os = `${ua.os.name} ${ua.os.version}`.toUpperCase();
  const engine = `${ua.engine.name} ${ua.engine.version}`.toUpperCase();
  const browser = `${ua.browser.name} ${ua.browser.version}`.toUpperCase();

  InterfaceUserAgent.text = `OS: ${os}\nENGINE: ${engine}\nBROWSER: ${browser}`;

  setTimeout(animate, 100);
};

animate();

export default InterfaceUserAgent;
