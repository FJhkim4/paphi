import React, { Component } from 'react';
import { connect } from 'react-redux';

class Chapters extends Component {
    renderChapters() {
        return this.props.chapters.map((chapter) => {
            let school = chapter.name.split("–")[1].split(',')[0].trim().split(' ').join('-').toLowerCase();
            return (
                <li id={school} key={chapter.name.split("–")[1]} className="row"><span className="greek">{chapter.name.split("–")[0]}</span> – {chapter.name.split("–")[1]}</li>
            );
        });
    }

    render() {
        return(
            <div className="container">
                <h2>Chapters of Pi Alpha Phi</h2>
                <ul className="list-group">
                    {this.renderChapters()}
                </ul>
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