import React from 'react';
import { ProcessConsumer } from '../../contexts/processes';

const WindowManager = () => {
    return (
        <ProcessConsumer>
            {({ processes }) =>
                Object.entries(processes).map(([pid, { Component }]) => (
                    <Component key={pid} />
                ))
            }
        </ProcessConsumer>
    );
};

export default WindowManager;
