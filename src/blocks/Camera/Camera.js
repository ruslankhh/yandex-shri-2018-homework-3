const userMedia = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

const Camera = {
  getUserMedia: () => userMedia
};

export default Camera;
