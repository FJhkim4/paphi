import React from 'react';
import NavCol from './nav-col';
import BrotherList from '../containers/brother_list';

const Brothers = () => {
    return (
        <div className="container">
            <h2>Brothers of Xi Chapter</h2>
            <BrotherList />
            <NavCol />
        </div>
    );
}

export default Brothers;