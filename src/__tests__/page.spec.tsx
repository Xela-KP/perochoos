import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
    it('renders the HomePage', async () => {
        render(<HomePage />);
        const heading = await waitFor(() => screen.getByRole('heading'));
        expect(heading).toBeInTheDocument();
    });
});
