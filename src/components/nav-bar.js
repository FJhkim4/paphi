import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg p-0">
            <a href="/" className="nav-element">ΠΑΦ | Home</a>
            <div className="p-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarControls" aria-controls="navbarControls" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark links"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse" id="navbarControls">
                <div className="navbar-nav ml-auto">
                    <a href="/history" className="nav-element">History</a>
                    <a href="/rush" className="nav-element">Rush</a>
                    <div className="dropdown">
                        <a className="dropdown-toggle nav-element" href="/brothers" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Brothers
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item nav-element" href="/actives">Active House</a>
                            <a className="dropdown-item nav-element" href="/brothers">All Brothers</a>
                        </div>
                    </div>
                    <a href="/chapters" className="nav-element">Chapters</a>
                    <a href="/contact-us" className="nav-element">Contact Us</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;