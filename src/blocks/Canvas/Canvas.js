import fps from 'fps';
import Player from '../Player/Player';
import './Canvas.css';

const Canvas = document.createElement('canvas');
const ctx = Canvas.getContext('2d');
// Canvas.getContext('webgl') ||
// Canvas.getContext('experimental-webgl');
const ticker = fps({ every: 10 });
let rate = 0;

setInterval(() => {
  rate = ticker.rate.toFixed(3);
}, 1000);

Canvas.className = 'Canvas';
Canvas.width = 640;
Canvas.height = 480;

const animate = () => {
  ctx.filter = `
    grayscale(1)
    blur(1px)
    brightness(1.5)
    contrast(1.5)
    saturate(1.5)
  `;
  ctx.drawImage(Player, 0, 0);
  ctx.filter = 'none';

  ctx.globalCompositeOperation = 'color';
  ctx.fillStyle = 'rgba(256, 0, 0, 0.8)';
  ctx.fillRect(0, 0, 640, 480);
  ctx.globalCompositeOperation = 'source-over';

  ctx.fillStyle = 'rgba(256, 256, 256, 1)';
  ctx.font = '14px Menlo, Monaco, monospace';
  ctx.fillText(`FPS: ${rate}`, 10, 30);

  ticker.tick();

  window.requestAnimationFrame(animate);
};

animate();

export default Canvas;
