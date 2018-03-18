import Player from '../Player/Player';
import './Canvas.css';

const Canvas = document.createElement('canvas');
const ctx = Canvas.getContext('2d');
// Canvas.getContext('webgl') ||
// Canvas.getContext('experimental-webgl');

Canvas.className = 'Canvas';
// Canvas.className = 'Canvas Canvas--filter-terminator';
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
  ctx.filter = 'none';
  window.requestAnimationFrame(animate);
};

animate();

export default Canvas;
