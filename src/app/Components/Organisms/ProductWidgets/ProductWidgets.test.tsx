import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContext } from '@/app/Components/Organisms/ProductWidgets';
import ProductWidgets from '.';

const mockOnActivateBadge = jest.fn();
const mockSetLinked = jest.fn();
const mockOnSelectColour = jest.fn();
const mockFetch = jest.fn();
global.fetch = mockFetch;

const mockWidgets = [{
  "id": 1,
  "type": "plastic bottles",
  "amount": 100,
  "action": "collects",
  "active": true,
  "linked": true,
  "selectedColor": "green"
},
{
  "id": 2,
  "type": "trees",
  "amount": 10,
  "action": "plants",
  "active": false,
  "linked": false,
  "selectedColor": "black"
}];

const renderProductWidgets = () =>
  render(
    <AppContext.Provider value={{
      onActivateBadge: mockOnActivateBadge,
      onSetLinked: mockSetLinked,
      onSelectColour: mockOnSelectColour,
    }}>
      <ProductWidgets />
    </AppContext.Provider>);


describe('ProductWidgets', () => {
  beforeEach(() => {
    mockFetch.mockImplementation(() => Promise.resolve({ json: () => mockWidgets }));
  });

  it('should render ProductWidgets', async () => {
    renderProductWidgets();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
    expect(screen.getByText('100 plastic bottles')).toBeInTheDocument();
    expect(screen.getByText('10 trees')).toBeInTheDocument();
  });

  it('should only activate 1 badge and deactivate others on click', async () => {
    const user = userEvent.setup()
    renderProductWidgets();

    await waitFor(() => {
      expect(screen.getByRole('checkbox', { name: 'toggle-1' })).toBeInTheDocument();
    });
    expect(screen.getByRole('checkbox', { name: 'toggle-1' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'toggle-2' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'toggle-2' })).not.toBeChecked();


    await user.click(screen.getByRole('checkbox', { name: 'toggle-2' }));
    expect(screen.getByRole('checkbox', { name: 'toggle-2' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'toggle-1' })).not.toBeChecked();
  });
  
  it('should allow to link widgets to the public profile', async () => {
    const user = userEvent.setup()
    renderProductWidgets();

    await waitFor(() => {
      expect(screen.getByRole('checkbox', { name: 'checkbox-1' })).toBeInTheDocument();
    });
    expect(screen.getByRole('checkbox', { name: 'checkbox-1' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'checkbox-2' })).not.toBeChecked();

    await user.click(screen.getByRole('checkbox', { name: 'checkbox-2' }));
    expect(screen.getByRole('checkbox', { name: 'checkbox-2' })).toBeChecked();
  });
});