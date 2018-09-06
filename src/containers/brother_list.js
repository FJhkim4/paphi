import React, { Component } from 'react';
import { connect } from 'react-redux';

class BrotherList extends Component {
    renderBrothers() {
        return this.props.brothers.map((brother) => {
            let picUrl = "../../resources/brothers/" + brother.number + ".jpeg";

            return (
                <div id={brother.name.split(' ').join('-').toLowerCase()} className="container" key={brother.number}>
                    <div className="bro-card">
                        <img src={picUrl} alt={brother.name} />
                        <p className={"bro-num" + (brother.ecab ? " ecab" : "")}>{brother.number}</p>
                        <div className="overlay">
                            <div className="container bro-hover">
                                <p>Big Bro: {brother.big}</p>
                                <p>Major: {brother.major}</p>
                                <p>Hometown: {brother.hometown}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container bro-info">
                        <p className="big-p">{brother.name}</p>
                        <p>{brother.class} Class</p>
                        <p>{brother.line}</p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div id="brothers" className="container">
                {this.renderBrothers()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        brothers: state.brothers
    };
}

export default connect(mapStateToProps)(BrotherList);