'use client';
import React, { createContext } from 'react';
import processDirectory from '../utils/processDirectory';
import type { ProcessContextState } from '../types/contexts/process';
import useProcessContextState from '../hooks/useProcessContextState';

export const ProcessContext = createContext<ProcessContextState>({
    processes: {},
});
export const ProcessConsumer = ProcessContext.Consumer;
export const ProcessProvider = ({ children }) => {
    return (
        <ProcessContext.Provider
            value={useProcessContextState(processDirectory)}
        >
            {children}
        </ProcessContext.Provider>
    );
};
