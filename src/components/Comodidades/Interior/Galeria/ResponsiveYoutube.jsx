import React from 'react';
import YouTube from 'react-youtube';

export default function ResponsiveYouTube({ videoId }) {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div
            style={{
                position: 'relative',
                paddingBottom: '56.25%' /* 16:9 */,
                paddingTop: 25,
                height: 0,
            }}
        >
            <YouTube
                videoId={videoId}
                opts={opts}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
}
