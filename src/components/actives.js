import React from 'react';
import ActiveList from '../containers/active_list';

const ActiveHouse = () => {
    return (
        <div className="container">
            <h2>Active House</h2>
            <p className="text-center text-muted">2018-2019 EXECUTIVE CABINET IN RED</p>
            <ActiveList />
        </div>
    );
}

export default ActiveHouse;