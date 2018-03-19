import * as PIXI from 'pixi.js';

const tiker = PIXI.ticker.shared;

const InterfaceFPS = new PIXI.Text('', {
  fontFamily: 'Menlo, Monaco, monospace',
  fontSize: 10,
  fill: 0xffffff
});

InterfaceFPS.position.set(20);

let fps = 0;

setInterval(() => {
  fps = tiker.FPS.toFixed(3).toString().toUpperCase();
}, 100);

const animate = () => {
  InterfaceFPS.text = `FPS: ${fps}`;
};

PIXI.ticker.shared.add(animate);

export default InterfaceFPS;
