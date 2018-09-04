import React, { Component } from 'react';
import { connect } from 'react-redux';

// still a plain component
// we don't export this. we want to export a container
class Rush extends Component {
    renderParagraph() {
        return this.props.rush.map((paragraph) => {
            return (
                <p key={paragraph.text.substring(0,5)} className="row">{paragraph.text}</p>
            );
        });
    }

    render() {
        return(
            <div className="container">
                <h2>About Rush</h2>
                <div className="container">
                    {this.renderParagraph()}
                </div>
                <div className="container rush-flyer">
                    <img src="../../resources/rush_front.jpg" />
                    <img src="../../resources/rush_back.jpg" />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rush: state.rush
    };
}

export default connect(mapStateToProps)(Rush);