import React, { Component } from 'react';
import { connect } from 'react-redux';

// still a plain component
// we don't export this. we want to export a container
class History extends Component {
    renderHistory() {
        return this.props.history.map((paragraph) => {
                if (paragraph.title) {
                    return (
                        <h2 key={paragraph.title.substring(0,5)} className="row">{paragraph.title}</h2>
                    );
                }  
                else if (paragraph.quote) {
                    return (
                        <blockquote key={paragraph.quote.substring(0,5)} className="row font-italic font-weight-light">{paragraph.quote}</blockquote>
                    );
                } else {
                    return (
                        <p key={paragraph.text.substring(0,5)} className="row">{paragraph.text}</p>
                    );
                }
        });
    }

    render() {
        return(
            <div className="container">
                <div className="col">
                    {this.renderHistory()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        history: state.history
    };
}

export default connect(mapStateToProps)(History);