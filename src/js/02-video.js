import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
import throttle from 'lodash.throttle';

let startTime = localStorage.getItem("videoplayer-current-time")?localStorage.getItem("videoplayer-current-time"):0;

player.setCurrentTime(startTime).then(function(seconds) {
    // console.log(seconds);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle((evt)=>localStorage.setItem("videoplayer-current-time",evt.seconds),1000));


