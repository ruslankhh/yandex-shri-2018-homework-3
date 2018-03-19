// Source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

import Camera from '../Camera/Camera';

const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
const AudioAnalyser = ctx.createAnalyser();

AudioAnalyser.minDecibels = -90;
AudioAnalyser.maxDecibels = -10;
AudioAnalyser.smoothingTimeConstant = 0.85;
AudioAnalyser.fftSize = 2048;

const analyse = (stream) => {
  const source = ctx.createMediaStreamSource(stream);
  const distortion = ctx.createWaveShaper();
  const biquadFilter = ctx.createBiquadFilter();
  const convolver = ctx.createConvolver();
  const gainNode = ctx.createGain();

  source.connect(AudioAnalyser);
  AudioAnalyser.connect(distortion);
  distortion.connect(biquadFilter);
  biquadFilter.connect(convolver);
  convolver.connect(gainNode);
  gainNode.connect(ctx.destination);

  return stream;
};

Camera.getUserMedia()
  .then(analyse);

export default AudioAnalyser;
