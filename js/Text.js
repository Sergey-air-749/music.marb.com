document.getElementById('text').innerHTML = '⬤ ⬤ ⬤ ⬤'
const audio2 = document.getElementById('playr');


document.getElementById('TextBox').style.backgroundColor = localStorage.getItem('alibom_color');
document.getElementById('music_name').innerHTML = localStorage.getItem('audio_after') + ' • ' + localStorage.getItem('audio_name') ;
document.getElementById('alibom_img').src = localStorage.getItem('audio_icon_max');

let content = ''

async function getResponse() {
    let response = await fetch('/music.marb.com/Text/' + localStorage.getItem('audio_name') + '.json')
    content = await response.json()

    document.getElementById('full-Text').value = JSON.stringify(content);

    console.table(content)
    // console.table(content[8])
}

function RESstatus() {
    fetch('/music.marb.com/Text/' + localStorage.getItem('audio_name') + '.json').then(response => {

        if (response.status == 200) {
            console.log(response.status)
        } else {
            document.getElementById('text').innerHTML = 'Не удалось найти текст'
        }

    });
}


function closeText() {
    document.getElementById('Text-img').src = '/music.marb.com/img/Text.svg';

    document.getElementById('header').style.display = 'flex';
    document.getElementById('main').style.display = 'block';
    document.getElementById('TextBox').style.display = 'none';
}



// function init() {
//     set = 0;
//     setInterval(tick, 1000);
// }

// function tick() {
//     if (localStorage.getItem('audio_play') == 1) {

//         set += 1
//         console.log(content[set])
//         console.log(set)
        
//         if (content[set] != undefined) {
//             document.getElementById('text').innerHTML = content[set]
//         }

//     }
// }

// init()


function Restart() {

    RESstatus()
    getResponse()

    document.getElementById('text').innerHTML = '⬤ ⬤ ⬤ ⬤'


    document.getElementById('TextBox').style.backgroundColor = localStorage.getItem('alibom_color');
    document.getElementById('music_name').innerHTML = localStorage.getItem('audio_after') + ' • ' + localStorage.getItem('audio_name') ;
    document.getElementById('alibom_img').src = localStorage.getItem('audio_icon_max');

    audio2.addEventListener('timeupdate', updateProgress)
}


function dataReSet() {
    localStorage.setItem('alibom_color', 'rgb(187, 76, 156)')
    localStorage.setItem('alibom_name',	'POX VAWË 0.5')
    localStorage.setItem('audio_after', 'OG Buda')
    localStorage.setItem('audio_icon', '/music.marb.com/img/100x100 (3).jpg')
    localStorage.setItem('audio_icon_max', '/music.marb.com/img/m1000x1000 (1).jpg')
    localStorage.setItem('audio_name', 'Из-за К...')
    localStorage.setItem('audio_play', 0)
    localStorage.setItem('audio_time', 86)
    localStorage.setItem('audio_time_max', 145)
    localStorage.setItem('playr', 'http://127.0.0.1:5500/music.marb.com/music/OG%20Buda/23115.mp3')
    localStorage.setItem('token', 245354)
}


function updateProgress(e) {

    if (localStorage.getItem('audio_time') != null || '0' || NaN) {

        if (localStorage.getItem('audio_play') == 1) {

            let time = localStorage.getItem('audio_time');

            // console.log(content[time])
            // console.log(time)
            
            if (content[time] != undefined) {
                document.getElementById('text').innerHTML = content[time]
            }
    
        }

    } else {

    }

}

audio2.addEventListener('timeupdate', updateProgress)

RESstatus()
getResponse()
