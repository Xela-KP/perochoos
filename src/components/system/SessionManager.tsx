'use client';
import React from 'react';
import { ProcessConsumer } from '../../contexts/process';

const SessionManager = () => {
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

export default SessionManager;
