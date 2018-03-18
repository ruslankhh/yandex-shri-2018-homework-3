import fps from 'fps';
import parser from 'ua-parser-js';

import './Interface.css';

const element = document.createElement('canvas');
const ctx = element.getContext('2d');

element.className = 'Interface';
element.width = 640;
element.height = 480;

const Interface = {
  ctx,
  ticker: fps({ every: 10 }),
  updateData: function () {
    const ua = parser(window.navigator.userAgent);

    this.ua = ua;
    this.os = `${ua.os.name} ${ua.os.version}`;
    this.engine = `${ua.engine.name} ${ua.engine.version}`;
    this.browser = `${ua.browser.name} ${ua.browser.version}`;

    this.rate = this.ticker.rate.toFixed(3);
  },
  view: element
};

setInterval(() => Interface.updateData(), 400);

const animate = () => {
  const { browser, ctx, engine, os, rate, view: { width, height } } = Interface;

  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '10px Menlo, Monaco, monospace';
  ctx.fillText(`FPS: ${String(rate).toUpperCase()}`, 10, 30);
  ctx.fillText(`OS: ${String(os).toUpperCase()}`, 10, 430);
  ctx.fillText(`ENGINE: ${String(engine).toUpperCase()}`, 10, 445);
  ctx.fillText(`BROWSER: ${String(browser).toUpperCase()}`, 10, 460);

  window.requestAnimationFrame(animate);
};

animate();

export default Interface;
