import React, { createContext, useState } from 'react';
import processDirectory from '../utils/processDirectory';
import { ScriptProps } from 'next/script';
import type { Processes } from '../types/utils/processDirectory';

type ProcessContextState = {
    processes: Processes;
};
export const ProcessContext = createContext<ProcessContextState>({
    processes: {},
});
export const ProcessConsumer = ProcessContext.Consumer;
export const ProcessProvider: React.FC<ScriptProps> = ({ children }) => {
    const [processes] = useState(processDirectory);
    return (
        <ProcessContext.Provider value={{ processes }}>
            {children}
        </ProcessContext.Provider>
    );
};
