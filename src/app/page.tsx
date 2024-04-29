import WindowManager from '../components/system/WindowManager';
import { ProcessProvider } from '../contexts/processes';
export default function Home() {
    return (
        <ProcessProvider>
            <WindowManager />
        </ProcessProvider>
    );
}
