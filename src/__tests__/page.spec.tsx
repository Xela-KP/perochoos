import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
    it('renders the HomePage', () => {
        render(<HomePage />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });
});
