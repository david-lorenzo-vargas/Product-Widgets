import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ToggleSwitch from '.';

const mockOnChange = jest.fn();

const renderToggleSwitch = (isChecked = false) =>
  render(<ToggleSwitch id="123" isChecked={isChecked} onClick={mockOnChange} />);

describe('ToggleSwitch', () => {
  it('should render ToggleSwitch', () => {
    renderToggleSwitch();
    const toggle = screen.getByRole('checkbox', { name: 'toggle-123' });
    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
  });

  it('should call onChange when ToggleSwitch is clicked and change checked value', async () => {
    const user = userEvent.setup();
    renderToggleSwitch();
    const toggle = screen.getByRole('checkbox', { name: 'toggle-123' });
    expect(toggle).not.toBeChecked();

    await user.click(toggle);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(toggle).toBeChecked();
  });
});