import React from 'react';
import './globals.css';
export const metadata = {
    title: 'Perocho OS',
    description: 'Personal Website Side Project',
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
