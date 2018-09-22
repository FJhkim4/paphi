import React from 'react';

const SocialLinks = () => {
    return (
        <div className="container w-50">
            <div className="media-icons row justify-content-center">
                <a className="col text-center p-2" target="_blank" href="https://www.facebook.com/uwpaphi"><img src="../../resources/iconmonstr-facebook.png" alt="facebook" /></a>
                <a className="col text-center p-2" target="_blank" href="https://www.youtube.com/channel/UCE3ENa_z5SbxIjVptyWoIhQ"><img src="../../resources/iconmonstr-youtube.png" alt="youtube" /></a>
                <a className="col text-center p-2" target="_blank" href="https://www.instagram.com/uw_paphi"><img src="../../resources/iconmonstr-instagram.png" alt="instagram" /></a>
                <a className="col text-center p-2" target="_blank" href="https://www.twitter.com/uw_paphi"><img src="../../resources/iconmonstr-twitter.png" alt="twitter" /></a>
            </div>
        </div>
    );
}

export default SocialLinks;