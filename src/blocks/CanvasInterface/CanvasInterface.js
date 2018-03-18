import fps from 'fps';
import parser from 'ua-parser-js';

import './CanvasInterface.css';

const CanvasInterface = document.createElement('canvas');
const ctx = CanvasInterface.getContext('2d');
// CanvasInterface.getContext('webgl') ||
// CanvasInterface.getContext('experimental-webgl');

CanvasInterface.ticker = fps({ every: 10 });
CanvasInterface.updateData = function () {
  const ua = parser(window.navigator.userAgent);

  this.ua = ua;
  this.os = `${ua.os.name} ${ua.os.version}`;
  this.engine = `${ua.engine.name} ${ua.engine.version}`;
  this.browser = `${ua.browser.name} ${ua.browser.version}`;

  this.rate = CanvasInterface.ticker.rate.toFixed(3);
};

setInterval(() => CanvasInterface.updateData(), 400);

CanvasInterface.className = 'CanvasInterface';
CanvasInterface.width = 640;
CanvasInterface.height = 480;

const animate = () => {
  ctx.clearRect(0, 0, CanvasInterface.width, CanvasInterface.height);

  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '12px Menlo, Monaco, monospace';
  ctx.fillText(`FPS: ${String(CanvasInterface.rate).toUpperCase()}`, 10, 30);
  ctx.fillText(`OS: ${String(CanvasInterface.os).toUpperCase()}`, 10, 420);
  ctx.fillText(`ENGINE: ${String(CanvasInterface.engine).toUpperCase()}`, 10, 440);
  ctx.fillText(`BROWSER: ${String(CanvasInterface.browser).toUpperCase()}`, 10, 460);

  window.requestAnimationFrame(animate);
};

animate();

export default CanvasInterface;
