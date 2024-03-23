import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CheckBox from '.';

const mockOnClick = jest.fn();
const boxId = 'age';

const renderCheckBox = (checked = true, label?: string) =>
  render(<CheckBox label={label} checked={checked} boxId={boxId} onClick={mockOnClick} />);

describe('CheckBox', () => {
  it('should render CheckBox', () => {
    renderCheckBox();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('label should render label if label is passed', () => {
    renderCheckBox(false, 'label');
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('label should not render label if label is not passed', () => {
    renderCheckBox();
    expect(screen.queryByText('label')).not.toBeInTheDocument();
  });

  it('checkBox should be checked when checked prop is true', () => {
    renderCheckBox();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should not be checked when passed false', () => {
    renderCheckBox(false);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should call onClick when CheckBox is clicked', async () => {
    const user = userEvent.setup();
    renderCheckBox();
    await user.click(screen.getByRole('checkbox'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
