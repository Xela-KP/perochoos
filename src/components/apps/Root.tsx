'use client';
import { SessionConsumer } from '../../contexts/session';
import themes from '../../styles/themes.json';
const Root = ({ children }) => (
    <SessionConsumer>
        {({ theme }) => (
            <html lang="en" data-theme={theme || themes.default}>
                <body>{children}</body>
            </html>
        )}
    </SessionConsumer>
);

export default Root;
