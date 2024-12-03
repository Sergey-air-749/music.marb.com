const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');

document.getElementById('playr').src = localStorage.getItem('playr')
document.getElementById('playr_img').src = localStorage.getItem('audio_icon');
audio_name.innerHTML = localStorage.getItem('audio_name')
audio_after.innerHTML = localStorage.getItem('audio_after')

// const urlParams = new URLSearchParams(window.location.search);
// const Text_Trek = urlParams.get('Text');

// if (Text_Trek == 1) {
//     document.getElementById('Text-img').src = '/music.marb.com/img/Text_on.svg';

//     document.getElementById('header').style.display = 'none';
//     document.getElementById('main').style.display = 'none';
//     document.getElementById('block').style.display = 'none';

//     // document.getElementById('Text').style.display = 'block';
// }

function play() {
    document.getElementById('playr').play();

    localStorage.setItem('audio_play', 1)

    document.getElementById('play').style.display = 'block'
    document.getElementById('pause').style.display = 'none'
}

function pause() {
    document.getElementById('playr').pause();
    
    localStorage.setItem('audio_play', 0)

    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
}





// function text() {
//     // document.getElementById('header').style.display = 'none';
//     // document.getElementById('main').style.display = 'none';
//     // document.getElementById('Text').style.display = 'block';

//     if (document.getElementById('header').style.display == 'none') {

//         document.getElementById('Text-img').src = '/music.marb.com/img/Text.svg';

//         document.getElementById('header').style.display = 'flex';
//         document.getElementById('main').style.display = 'block';
//         document.getElementById('TextBox').style.display = 'none';

//         // document.getElementById('Text').style.display = 'none';

//     } else if (document.getElementById('header').style.display == 'flex') {

//         document.getElementById('Text-img').src = '/music.marb.com/img/Text_on.svg';

//         document.getElementById('header').style.display = 'none';
//         document.getElementById('main').style.display = 'none';
//         document.getElementById('TextBox').style.display = 'flex';

//         // document.getElementById('Text').style.display = 'block';

//     }
// }


function Close() {
    document.getElementById('header').style.display = 'flex';
    document.getElementById('main').style.display = 'block';
    document.getElementById('Text').style.display = 'none';
}






InputReg.addEventListener('input', ()=>{
    audio.currentTime = Math.floor(InputReg.value)

    // InputReg.max = Math.floor(playr.duration);
});

function debug() {
    console.log(audio.currentTime)
    console.log(audio.duration)
}

function updateProgress(e) {

    if (localStorage.getItem('audio_time') == null || '0' || NaN) {

        localStorage.setItem('audio_time', Math.floor(InputReg.value))
        localStorage.setItem('audio_time_max', Math.floor(InputReg.max))

        document.getElementById('time_line').innerHTML = Math.floor(audio.currentTime) + '/' + Math.floor(audio.duration);

        InputReg.value = audio.currentTime
        InputReg.max = Math.floor(audio.duration)

    } else {

    }

}

audio.addEventListener('timeupdate', updateProgress)

