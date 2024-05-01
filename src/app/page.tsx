import SessionManager from '../components/system/SessionManager';
import { ProcessProvider } from '../contexts/process';
export default function Home() {
    return (
        <ProcessProvider>
            <SessionManager />
        </ProcessProvider>
    );
}
