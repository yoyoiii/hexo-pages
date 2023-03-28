import $ from 'jquery';
// import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
// import '../lib/Meting.min'



let page = {
    init: () => {
        page.loadAPlayer();
        page.event();
    },
    loadAPlayer: () => {
        const options = {
            container: document.getElementById('aplayer'),
            mini: true,
            // listFolded: false,
            // listMaxHeight: 90,
            // lrcType: 3,
            audio: [
                {
                    name: 'name1',
                    artist: 'artist1',
                    url: 'http://music.163.com/song/media/outer/url?id=496869422.mp3',
                    cover: '../images/favicon.png',
                    // lrc: 'lrc1.lrc',
                    theme: '#ebd0c2'
                },
            ]
        }
        const ap = new APlayer(options);
    },
    event: () => {

    }
}

page.init();