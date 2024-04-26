import './globals.css';
import React from 'react';
import StyledComponentsRegistry from '../lib/registry';
export const metadata = {
    title: 'Perocho OS',
    description: 'Personal Website Side Project',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                }
            </body>
        </html>
    );
}
