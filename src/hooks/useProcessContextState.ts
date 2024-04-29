import { useState } from 'react';
import { ProcessContextState, Processes } from '../types/contexts/processes';

const useProcessContextState = (
    startUpProcesses: Processes
): ProcessContextState => {
    const [processes] = useState(startUpProcesses);
    return { processes };
};
export default useProcessContextState;
