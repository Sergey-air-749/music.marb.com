const InputReg = document.getElementById('time');
const audio = document.getElementById('playr');
const audio_name = document.getElementById('audio_name');
const audio_after = document.getElementById('audio_after');


let icon = '/music.marb.com/img/НаучиМеня (Пользовательское).jpg';
let icon_max = '/music.marb.com/img/НаучиМеня.jpg';
audio_after.innerHTML = 'YUNGWAY'
let alibom_name = 'Научи меня'


// function play() {
//     document.getElementById('playr').play();

//     document.getElementById('play').style.display = 'block'
//     document.getElementById('pause').style.display = 'none'
// }

// function pause() {
//     document.getElementById('playr').pause();

//     document.getElementById('play').style.display = 'none'
//     document.getElementById('pause').style.display = 'block'
// }

// function pause() {
//     if (document.getElementById('playr').paused != true) {
//         document.getElementById('playr').play();
//     } else {
//         document.getElementById('playr').pause();
//     }
// }


function share() {

    const shareData = {
        title: "MARB Music",
        text: "",
        url: location.href,
    };

    navigator.share(shareData);
}

function color() {
    localStorage.setItem('alibom_color', 'rgb(255, 173, 65)')
}



function music_1() {
    document.getElementById('playr').src = '/music.marb.com/music/YUNGWAY/f267d6e29df698306c660508875c1a059d1b044bf7186358671085d3880f51ca.mp3';
    document.getElementById('playr_img').src = icon;

    audio_name.innerHTML = 'Научи меня'
    audio_after.innerHTML = 'YUNGWAY'

    localStorage.setItem('playr', document.getElementById('playr').src )
    localStorage.setItem('audio_icon', icon)
    localStorage.setItem('audio_icon_max', icon_max)
    localStorage.setItem('audio_name', audio_name.innerHTML)
    localStorage.setItem('audio_after', audio_after.innerHTML)
    localStorage.setItem('alibom_name', alibom_name)

    getResponse()
    color()
    play()
}





InputReg.addEventListener('input', ()=>{
    audio.currentTime = Math.floor(InputReg.value)

    //InputReg.max = Math.floor(playr.duration);
});

function debug() {
    console.log(audio.currentTime)
    console.log(audio.duration)
}

// function updateProgress(e) {
//     InputReg.value = audio.currentTime
//     InputReg.max = Math.floor(audio.duration)

//     // if (localStorage.getItem('audio_time') == null || 0) {

//     // } else {
//     //     localStorage.setItem('audio_time', InputReg.value)
//     //     localStorage.setItem('audio_time_max', InputReg.max)
//     // }
// }

