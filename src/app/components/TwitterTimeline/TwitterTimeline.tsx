import React, { useEffect } from 'react';

const TwitterTimeline = ({ twitterUrl }: { twitterUrl: string }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        document.getElementsByClassName('twitter-embed')[0].appendChild(script);
    }, []);

    return (
        <div className="twitter-embed" style={{ borderRadius: "30%" }}>
            <a
                data-chrome="noborders noheader nofooter noscrollbar"
                className="twitter-timeline"
                data-lang="sv"
                data-tweet-limit="5"
                tweet-limit="5"
                href={`https://twitter.com/${twitterUrl}`}
            >
            </a>
        </div>
    );
};

export default TwitterTimeline;
