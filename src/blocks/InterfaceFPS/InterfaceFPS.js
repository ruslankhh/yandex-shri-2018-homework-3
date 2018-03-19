import * as PIXI from 'pixi.js';

const tiker = PIXI.ticker.shared;

const InterfaceFPS = new PIXI.Text('', {
  fontFamily: 'Menlo, Monaco, monospace',
  fontSize: 10,
  fill: 0xffffff
});

InterfaceFPS.position.set(20);

const animate = () => {
  const fps = tiker.FPS.toFixed(3).toString().toUpperCase();

  InterfaceFPS.text = `FPS: ${fps}`;

  setTimeout(animate, 100);
};

animate();

export default InterfaceFPS;
