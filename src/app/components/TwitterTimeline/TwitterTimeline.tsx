import React, { useEffect } from 'react';

const TwitterTimeline = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.getElementsByClassName('twitter-embed')[0].appendChild(script);
    }, []);

    return (
        <div className="twitter-embed" style={{ borderRadius:"30%" }}>
            <a
                data-chrome="noborders noheader nofooter"
                data-tweet-limit="2"
                className="twitter-timeline"
                data-lang="sv"
                data-theme="dark"
                href="https://twitter.com/applenws?ref_src=twsrc%5Etfw"
            >
            </a>
        </div>
    );
};

export default TwitterTimeline;