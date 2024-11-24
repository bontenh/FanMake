import React from 'react';
import { useRef, useEffect } from 'react';
import Hls from 'hls.js';
import { Header } from './Header';

export let StreamShow = () => {
    let video_ref = useRef(null);
    useEffect(() => {
        let videoSrc = 'http://localhost/live/hls/nginx.m3u8';

        if ( Hls.isSupported() ) {
            let config = {
                debug: true
            }
            let hls = new Hls(config);
            hls.loadSource(videoSrc);
            hls.attachMedia(video_ref.current);
            // hls.on(Hls.Events.MANIFEST_PARSED,function() {
            //     video_ref.current.play();
            // });
        } else if ( video.canPlayType('application/vnd.apple.mpegurl') ) {  // ネイティブサポートブラウザ用
            video.src = videoSrc;
        }
    })
    //let video = document.getElementById("hls_video");

    return (
        <div>
            <Header />
            <video ref={video_ref} id="hls_video" width="640" height="480" controls></video>
        </div>
    )
}

// export default StreamShow;