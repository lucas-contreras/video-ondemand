import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const CircularIndeterminate = (props) => {
    return (
        <div>
            <CircularProgress />
            <CircularProgress color="secondary" />
        </div>
    );
}

export default CircularIndeterminate;