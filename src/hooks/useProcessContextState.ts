import { useState } from 'react';
import type { ProcessContextState, Processes } from '../types/contexts/process';
const useProcessContextState = (
    startUpProcesses: Processes
): ProcessContextState => {
    const [processes] = useState(startUpProcesses);
    return { processes };
};
export default useProcessContextState;
