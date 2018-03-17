import Player from '../Player/Player';
import './Canvas.css';

const Canvas = document.createElement('canvas');
const ctx = Canvas.getContext('2d');

Canvas.className = 'Canvas Canvas--filter-terminator';
Canvas.width = 640;
Canvas.height = 480;

const animate = () => {
  ctx.drawImage(Player, 0, 0);
  window.requestAnimationFrame(animate);
};

animate();

export default Canvas;
