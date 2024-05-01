import { SessionProvider } from '../contexts/session';
import './globals.css';
import Root from '../components/apps/Root';
export const metadata = {
    title: 'Perocho OS',
    description: 'Personal Website Side Project',
};
export default function RootLayout({ children }) {
    return (
        <SessionProvider>
            <Root>{children}</Root>
        </SessionProvider>
    );
}
