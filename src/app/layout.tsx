import './globals.scss';
import { name, description } from '../../package.json';
export const metadata = {
    title: name,
    description: description,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
