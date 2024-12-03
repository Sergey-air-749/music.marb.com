const InputReg_S = document.getElementById('time');
const audio_S = document.getElementById('playr');
const audio_name_S = document.getElementById('audio_name');
const audio_after_S = document.getElementById('audio_after');





if (localStorage.getItem('playr') == null) {
    document.getElementById('playr_img').src = '/music.marb.com/img/notaudio.svg'
    audio_name_S.innerHTML = 'Нет данных'
} else {
    document.getElementById('playr').src = localStorage.getItem('playr')
    document.getElementById('playr_img').src = localStorage.getItem('audio_icon');
    audio_name_S.innerHTML = localStorage.getItem('audio_name')
    audio_after_S.innerHTML = localStorage.getItem('audio_after')


    // audio_after_S.duration = localStorage.getItem('audio_time')
    // InputReg_S.max = localStorage.getItem('audio_time_max')
    // InputReg_S.value = localStorage.getItem('audio_time')
}








function play() {
    document.getElementById('playr').play();

    localStorage.setItem('audio_play', 1)

    document.getElementById('play').style.display = 'block'
    document.getElementById('pause').style.display = 'none'

    Restart()
}

function pause() {
    document.getElementById('playr').pause();
    
    localStorage.setItem('audio_play', 0)

    document.getElementById('play').style.display = 'none'
    document.getElementById('pause').style.display = 'block'
}



// if (localStorage.getItem('audio_name') == null) {
//     document.getElementById('Text-img').src = '/music.marb.com/img/Text_off.svg';
// }



function text() {
    // document.getElementById('header').style.display = 'none';
    // document.getElementById('main').style.display = 'none';
    // document.getElementById('Text').style.display = 'block';

    if (document.getElementById('header').style.display == 'none' || document.getElementById('main').style.display == 'none' || localStorage.getItem('audio_name') == null) {

        document.getElementById('Text-img').src = '/music.marb.com/img/Text.svg';

        document.getElementById('header').style.display = 'flex';
        document.getElementById('main').style.display = 'block';
        document.getElementById('TextBox').style.display = 'none';

        // document.getElementById('Text').style.display = 'none';

    } else if (document.getElementById('header').style.display == 'flex') {

        document.getElementById('Text-img').src = '/music.marb.com/img/Text_on.svg';

        document.getElementById('header').style.display = 'none';
        document.getElementById('main').style.display = 'none';
        document.getElementById('TextBox').style.display = 'flex';

        // document.getElementById('Text').style.display = 'block';

    }
}
