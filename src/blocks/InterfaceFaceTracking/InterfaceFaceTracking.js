import { Container, Sprite, Texture } from 'pixi.js';
// import 'tracking';
// import './../../../node_modules/tracking/build/data/face';

const InterfaceFaceTracking = new Container();

const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

// window.onload = () => {
//   const tracker = new tracking.ObjectTracker('face');

//   tracker.setInitialScale(4);
//   tracker.setStepSize(2);
//   tracker.setEdgesDensity(0.1);

//   tracking.track('.Player', tracker);

//   tracker.on('track', function (event) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     event.data.forEach(function (rect) {
//       ctx.strokeStyle = '#a64ceb';
//       ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
//       ctx.font = '10px Menlo, Monaco, monospace';
//       ctx.fillStyle = '#ffffff';
//       ctx.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
//       ctx.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
//     });
//   });
// };

const texture = Texture.fromCanvas(canvas);
const canvasSprite = new Sprite(texture);

InterfaceFaceTracking.addChild(
  canvasSprite
);

export default InterfaceFaceTracking;
