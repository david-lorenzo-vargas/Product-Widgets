import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContext } from '@/app/Components/Organisms/ProductWidgets';
import ColourSwitch from '.';
import { WidgetSelectedColorEnum } from '@customTypes/types';

const mockOnSelectColour = jest.fn();
const id = 123;
const colour = WidgetSelectedColorEnum.black;

const renderColourSwitch = (colourSelected: WidgetSelectedColorEnum = colour) =>
  render(
    <AppContext.Provider value={{
      onActivateBadge: jest.fn(),
      onSetLinked: jest.fn(),
      onSelectColour: mockOnSelectColour,
    }}>
      <ColourSwitch id={id} colourSelected={colourSelected} />
    </AppContext.Provider>);

describe('ColourSwitch', () => {
  it('should render ColourSwitch component', () => {
    renderColourSwitch();
    expect(screen.getByText('Badge colour')).toBeInTheDocument();
    Object.values(WidgetSelectedColorEnum).forEach((c: WidgetSelectedColorEnum) => {
      expect(screen.getByRole('button', { name: `${id}-${c}` })).toBeInTheDocument();
    });
  });
  it('should call onSelectColour with correct values', async () => {
    const user = userEvent.setup();
    renderColourSwitch();
    await user.click(screen.getByRole('button', { name: `${id}-${colour}` }));
    expect(mockOnSelectColour).toHaveBeenCalledTimes(1);
    expect(mockOnSelectColour).toHaveBeenCalledWith(id, colour);
  });
});