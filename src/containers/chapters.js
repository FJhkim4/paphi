import React, { Component } from 'react';
import { connect } from 'react-redux';

class Chapters extends Component {
    renderChapters() {
        return this.props.chapters.map((chapter) => {
            let school = chapter.name.split("–")[1].split(',')[0].trim().split(' ').join('-').toLowerCase();
            return (
                <li id={school} key={chapter.name.split("–")[1]} className="list-group-item"><span className="greek">{chapter.name.split("–")[0]}</span> – {chapter.name.split("–")[1]}</li>
            );
        });
    }

    render() {
        return(
            <div className="container">
                <h2>Chapters of Pi Alpha Phi</h2>
                <div className="container">
                    <ul className="list-group list-group-flush">
                        {this.renderChapters()}
                    </ul>
                </div>
                <div className="container w-25 mx-auto">
                    <a className="nav-element text-center" href="http://live.uwpaphi.site">LibCal Bookings</a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chapters: state.chapters
    };
}

export default connect(mapStateToProps)(Chapters);