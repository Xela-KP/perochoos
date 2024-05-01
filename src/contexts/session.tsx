'use client';
import React, { createContext } from 'react';
import type { SessionContextState } from '../types/contexts/session';
import useSessionContextState from '../hooks/useSessionContextState';

export const SessionContext = createContext<SessionContextState>({
    theme: undefined,
});
export const SessionConsumer = SessionContext.Consumer;
export const SessionProvider = ({ children }) => {
    return (
        <SessionContext.Provider value={useSessionContextState()}>
            {children}
        </SessionContext.Provider>
    );
};
