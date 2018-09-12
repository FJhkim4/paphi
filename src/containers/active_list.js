import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveList extends Component {
    renderActives() {
        return this.props.actives.map((brother) => {
            let picUrl = "../../resources/brothers/" + brother.number + ".jpeg";
            var year = brother.year;
            switch (year) {
                case 1:
                    year = "First";
                    break;
                case 2:
                    year = "Second";
                    break;
                case 3:
                    year = "Third";
                    break;
                case 4:
                    year = "Fourth";
                    break;
                case 5:
                    year = "Fifth";
                    break;
                default:
                    year = "Alumni";
            }

            return (
                <div id={brother.name.split(' ').join('-').toLowerCase()} className="" key={brother.number}>
                    <div className="card text-center">
                        <img className="card-img-top" src={picUrl} alt={brother.name} />
                        
                        <div className="rounded overlay d-flex align-items-center">
                            <div className="container hidden-info">
                                <p className="card-text">Big Bro: {brother.big}</p>
                                <p className="card-text">Hometown: {brother.hometown}</p>
                                <p className="card-text">Year: {year}</p>
                                <p className="card-text">Major: {brother.major}</p>
                            </div>
                        </div>

                        <div className="card-body">
                            <h2 className="big-p card-title">{brother.name}</h2>
                            <p className="card-info">{brother.class} Class</p>
                            <p className="card-info">{brother.line}</p>
                        </div>

                        <p className={"bro-num rounded" + (brother.ecab ? " ecab" : "")}>{brother.number}</p>
                    </div>
                    
                </div>
            );
        });
    }

    render() {
        return (
            <div id="actives" className="container">
                <div className="card-deck justify-content-center">
                    {this.renderActives()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        actives: state.actives
    };
}

export default connect(mapStateToProps)(ActiveList);