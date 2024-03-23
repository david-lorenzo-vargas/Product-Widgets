import { render, screen } from '@testing-library/react';
import Tooltip from '.';

const ChildComponent = () => {
  return (
    <div data-testid="ChildComponent">ChildComponent</div>
  );
};

describe('Tooltip', () => {
  it('should render Tooltip with its ChildComponent', () => {
    render(<Tooltip position="top"><ChildComponent /></Tooltip>);
    expect(screen.getByTestId("ChildComponent")).toBeInTheDocument();
  });
});