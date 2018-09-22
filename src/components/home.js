import React, { Component } from 'react';
import { instaAPIKey } from '../../config/keys';

class Home extends Component {
    render() {
        return (
            <div id="home-page" className="container-fluid">
                <div id="banner" className="container-fluid"></div>
                <div id="home-body" className="container">
                    <h1 className="display-2">ΠΑΦ</h1>
                    <h1 className="lead m-0">Pi Alpha Phi - University of Washington </h1>
                    <h1 className="lead m-0">Xi Chapter | Est. 2004</h1>
                    <h1 className="lead font-italic">A Tradition of Excellence since 1926</h1>
                    <div id="pixlee_container" className="container w-75 mx-auto"></div>
                </div>
            </div>
        );
    }
}

window.PixleeAsyncInit = function() {
    Pixlee.init({
        apiKey: 'dYaCkvnfvvPi8oonM3w'
    });

    Pixlee.addSimpleWidget({
        widgetId:'9310'
    });
};

export default Home;