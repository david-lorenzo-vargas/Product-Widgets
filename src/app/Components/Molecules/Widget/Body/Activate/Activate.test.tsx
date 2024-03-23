import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContext } from '@/app/Components/Organisms/ProductWidgets';
import Activate from '.';

const mockOnActivateBadge = jest.fn();
const id = 123;

const renderActivate = (active = false) =>
  render(
    <AppContext.Provider value={{
      onActivateBadge: mockOnActivateBadge,
      onSetLinked: jest.fn(),
      onSelectColour: jest.fn(),
    }}>
      <Activate id={id} active={active} />
    </AppContext.Provider>);

describe('Activate', () => {
  it('should render Activate component', () => {
    renderActivate();
    expect(screen.getByText('Activate badge')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: `toggle-${id}` })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: `toggle-${id}` })).not.toBeChecked();
  });
  it('should call onActivateBadge with correct id', async () => {
    const user = userEvent.setup();
    renderActivate();
    await user.click(screen.getByRole('checkbox', { name: `toggle-${id}` }));
    expect(mockOnActivateBadge).toHaveBeenCalledTimes(1);
    expect(mockOnActivateBadge).toHaveBeenCalledWith(id);
  });
});