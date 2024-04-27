import React from 'react';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyles from './styles/GlobalStyles';
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
                        <GlobalStyles />
                        {children}
                    </StyledComponentsRegistry>
                }
            </body>
        </html>
    );
}
