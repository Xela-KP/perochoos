'use client';
import React from 'react';
import { ProcessConsumer } from '../../contexts/process';
import Window from './Window';

const ProcessLoader = () => {
    return (
        <ProcessConsumer>
            {({ processes }) =>
                Object.entries(processes).map(
                    ([pid, { Component, hasWindow }]) =>
                        hasWindow ? (
                            <Window key={pid}>
                                <Component />
                            </Window>
                        ) : (
                            <Component key={pid} />
                        )
                )
            }
        </ProcessConsumer>
    );
};

export default ProcessLoader;
