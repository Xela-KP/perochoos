'use client';
import dynamic from 'next/dynamic';
import { ProcessConsumer } from '../../contexts/process';
// import Window from './Window';
import { Process } from '../../types/contexts/process';

const Window = dynamic(() => import('../system/Window'));

const RenderProcess = ({ Component, hasWindow }: Process) =>
    hasWindow ? (
        <Window>
            <Component />
        </Window>
    ) : (
        <Component />
    );

const ProcessLoader = () => {
    return (
        <ProcessConsumer>
            {({ processes }) =>
                Object.entries(processes).map(
                    ([pid, process]: [pid: string, process: Process]) => (
                        <RenderProcess key={pid} {...process} />
                    )
                )
            }
        </ProcessConsumer>
    );
};

export default ProcessLoader;
