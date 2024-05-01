import { ComponentType } from 'react';
export type Process = { Component: ComponentType };
export type Processes = { [pid: string]: Process };
export type ProcessContextState = {
    processes: Processes;
};