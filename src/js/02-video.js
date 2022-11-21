import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

 player.on('timeupdate', throttle(onPlayUpdate, 1000));
function onPlayUpdate(e) {
    localStorage.setItem(STORAGE_KEY, e.seconds);
}


function onTime(t) {
    const dataTime = localStorage.getItem(STORAGE_KEY)
    if (dataTime) {
        player.setCurrentTime(dataTime)
    }  
}
 
onTime();