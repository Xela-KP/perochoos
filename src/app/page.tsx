import WindowManager from '../components/system/WindowManager';
import { ProcessProvider } from '../contexts/processes';
// import Image from 'next/image';
export default function Home() {
    return (
        <ProcessProvider>
            <WindowManager />
        </ProcessProvider>
    );
}
