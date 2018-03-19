import 'tracking';
import './../../../node_modules/tracking/build/data/face';

import Camera from '../Camera/Camera';
import Player from '../Player/Player';

const FaceTracker = new tracking.ObjectTracker('face');

FaceTracker.setEdgesDensity(0.01);
FaceTracker.setInitialScale(1);
FaceTracker.setStepSize(2);

const track = (stream) => {
  const PlayerCanvas = document.createElement('canvas');
  const ctx = PlayerCanvas.getContext('2d');

  PlayerCanvas.width = 640;
  PlayerCanvas.height = 480;

  const animate = () => {
    const { width, height } = PlayerCanvas;

    ctx.drawImage(Player, 0, 0);

    const imageData = ctx.getImageData(0, 0, width, height);

    FaceTracker.track(imageData.data, width, height);

    setTimeout(animate, 1000);
  };

  animate();

  return stream;
};

Camera.getUserMedia()
  .then(track);

export default FaceTracker;
