import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('iframe');

const player = new Player(iframeEl);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on(`timeupdate`, throttle(getCurrentTime, 1000));

function getCurrentTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}
