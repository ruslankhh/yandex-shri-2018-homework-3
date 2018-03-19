import * as PIXI from 'pixi.js';

const ticker = PIXI.ticker.shared;

const InterfaceFPS = new PIXI.Text('', {
  fontFamily: 'Menlo, Monaco, monospace',
  fontSize: 10,
  fill: 0xffffff
});

InterfaceFPS.position.set(20);

const animate = () => {
  const fps = ticker.FPS.toFixed(3).toString().toUpperCase();

  InterfaceFPS.text = `FPS: ${fps}`;

  setTimeout(animate, 100);
};

animate();

InterfaceFPS.animate = animate;

export default InterfaceFPS;
