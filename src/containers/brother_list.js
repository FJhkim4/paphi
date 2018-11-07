import React, { Component } from 'react';
import { connect } from 'react-redux';

const XI = 120;

// className={(brother.active ? "" : "")}
// to check for whether or not the brother is an active currently

class BrotherList extends Component {
    renderBrothers() {
        let currClass = "Charter";
        let currBrothers = [];

        return this.props.brothers.map((brother) => {

            if (currClass !== brother.class || brother.number === XI) { // ending a class

                if (brother.number === XI) { // ending active house
                    currBrothers.push(brother);
                }

                let picUrl = "../../resources/classes/" + currClass.split(' ').join('-').toLowerCase() + ".jpg";

                let output = (
                    <div className="card" id={currClass.split(' ').join('-').toLowerCase()} key={currClass}>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title text-center">{currClass} Class</h3>
                            <img className="align-self-center p-2" src={picUrl} alt={currClass} />
                            <ul className="card-text text-center p-2">
                                {renderCl(currBrothers)}
                            </ul>
                        </div>
                        <hr className="my-4 bg-warning" />
                    </div>
                );

                currBrothers = [];
                currClass = brother.class;
                currBrothers.push(brother);
                return output;
            } else {
                currBrothers.push(brother);
            }


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

function renderCl(cl) {
    return cl.map((brother) => {
        return (
            <li key={brother.name}>#{brother.number} {brother.name}</li>
        );    
    });
}

function mapStateToProps(state) {
    return {
        brothers: state.brothers
    };
}

export default connect(mapStateToProps)(BrotherList);