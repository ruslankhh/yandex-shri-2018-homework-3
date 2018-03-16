const Player = document.getElementById('Player');

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(stream => {
    try {
      Player.srcObject = stream;
    } catch (error) {
      Player.src = URL.createObjectURL(stream);
    }
  });
