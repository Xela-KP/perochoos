import { ComponentType } from 'react';
export type Process = {
    Component: ComponentType;
    hasWindow: boolean;
};
export type Processes = { [pid: string]: Process };
export type ProcessContextState = {
    processes: Processes;
};
