// Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

import AudioAnalyser from '../AudioAnalyser/AudioAnalyser';

const AudioVisualizer = document.createElement('canvas');
const ctx = AudioVisualizer.getContext('2d');

AudioVisualizer.width = 100;
AudioVisualizer.height = 40;

ctx.lineWidth = 1;
ctx.strokeStyle = '#ffffff';

const { width, height } = AudioVisualizer;
const bufferLength = AudioAnalyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

const animate = () => {
  AudioAnalyser.getByteTimeDomainData(dataArray);

  const sliceWidth = width * 1 / bufferLength;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();

  for (let i = 0, x = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = v * height / 2;

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  ctx.lineTo(width, height / 2);
  ctx.stroke();

  window.requestAnimationFrame(animate);
};

animate();

export default AudioVisualizer;
