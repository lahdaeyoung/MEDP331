//Global variables
const media = document.querySelector('video') // this just gets the video element
let playbackSpeed = 1 // Global variable to hold the playbackSpeed
const btn = document.getElementById('backgroundchange');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

function getModifier() {
  let valueElement = O("valueText")
  // get value of input element
  let valueText = valueElement.value
  // casting to a number - even though we set our input element to be a number, it still comes out as a string in JavaScript
  let value = Number(valueText)
  return value
}

function playPauseMedia() {
  if(media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

function selectVideo() {
  let selectVideo = O('video-select')
  let preference = selectVideo.value

  switch(preference) {
    case ("age"):
      media.src = "vid/curbyourage.mp4"
      break;
    case ("racism"):
      media.src = "vid/curbyourracism.mp4"
      break;
    default:
      break;
  }
}
