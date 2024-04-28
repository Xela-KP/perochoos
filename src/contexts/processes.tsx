// import { createContext, FC } from 'react';
import { FC } from 'react';
import processDirectory from '../utils/processDirectory';
// const processContext = createContext({});

const ProcessLoader: FC = () => {
    return (
        <>
            {Object.entries(processDirectory).map(([pid, { Component }]) => (
                <Component key={pid} />
            ))}
        </>
    );
};
export default ProcessLoader;
