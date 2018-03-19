import FaceTracker from '../FaceTracker/FaceTracker';

const FaceTrackerInterface = document.createElement('canvas');
const ctx = FaceTrackerInterface.getContext('2d');

FaceTrackerInterface.width = 640;
FaceTrackerInterface.height = 480;

ctx.lineWidth = 1;
ctx.strokeStyle = '#ffffff';
ctx.font = '10px Menlo, Monaco, monospace';
ctx.fillStyle = '#ffffff';

FaceTracker.on('track', (event) => {
  const { width, height } = FaceTrackerInterface;

  ctx.clearRect(0, 0, width, height);

  event.data.forEach((rect) => {
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillText('X: ' + rect.x, rect.x + rect.width + 5, rect.y + 11);
    ctx.fillText('Y: ' + rect.y, rect.x + rect.width + 5, rect.y + 22);
  });
});

export default FaceTrackerInterface;
