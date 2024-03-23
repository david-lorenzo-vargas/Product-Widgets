import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from '.';

const mockOnClick = jest.fn();
const id = 'button';
const type = 'submit';

const ChildComponent = () => {
  return (
    <div data-testid="ChildComponent">ChildComponent</div>
  );
};

const renderButton = (disabled: boolean = false) =>
  render(<Button disabled={disabled} id={id} onClick={mockOnClick} type={type}><ChildComponent /></Button>);

describe('Button', () => {
  it('should render Button', () => {
    renderButton();
    expect(screen.getByTitle(id)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be disabled when passed disabled prop', () => {
    renderButton(true);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('should call onClick when button is clicked', async () => {
    const user = userEvent.setup()
    renderButton();
    await user.click(screen.getByRole('button', { name: 'button' }));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render a child component', () => {
    renderButton();
    expect(screen.getByTestId("ChildComponent")).toBeInTheDocument();
  });
});