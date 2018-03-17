const Player = document.createElement('video');

Player.className = 'Player';
Player.autoplay = true;
Player.defaultMuted = true;

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(stream => {
    try {
      Player.srcObject = stream;
    } catch (error) {
      Player.src = URL.createObjectURL(stream);
    }
  });

export default Player;
