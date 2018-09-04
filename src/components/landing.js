import React from 'react';

const Landing = () => {
    return(
        <div id="nav-con" className="container-fluid">
            <div className="nav-bar row">
                <div id="logo" className="col-sm-2">
                    <a className="nav-element" href="/">ΠΑΦ | Home</a>
                </div>
                <div id="nav-links" className="col-sm-10 justify-content-right">
                    <a className="nav-element row-2 text-sm-center" href="/history">History</a>
                    <a className="nav-element row-2 text-sm-center" href="/rush">Rush</a>
                    <a className="nav-element row-2 text-sm-center" href="/brothers">Brothers</a>
                    <a className="nav-element row-2 text-sm-center" href="/chapters">Chapters</a>
                    <a className="nav-element row-2 text-sm-center" href="/contact-us">Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default Landing;