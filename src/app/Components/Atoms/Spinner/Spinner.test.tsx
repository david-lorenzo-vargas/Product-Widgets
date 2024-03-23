import { render, screen } from '@testing-library/react';
import Spinner from '.';

describe('Spinner', () => {
  it('should render Spinner', () => {
    render(<Spinner />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});