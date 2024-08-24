import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const textElement = screen.getByText(/Get started/i);
    expect(textElement).toBeInTheDocument();
  });
});
