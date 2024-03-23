import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContext } from '@/app/Components/Organisms/ProductWidgets';
import LinkToPublicProfile from '.';

const mockOnSetLinked = jest.fn();
const id = 123;

const renderLinkToPublicProfile = (linked: boolean = true) =>
  render(
    <AppContext.Provider value={{
      onActivateBadge: jest.fn(),
      onSelectColour: jest.fn(),
      onSetLinked: mockOnSetLinked,
    }}>
      <LinkToPublicProfile id={id} linked={linked} />
    </AppContext.Provider>);

describe('LinkToPublicProfile', () => {
  it('should render LinkToPublicProfile component and its subcomponents', () => {
    renderLinkToPublicProfile();
    expect(screen.getByText('Link to Public Profile')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: `checkbox-${id}` })).toBeInTheDocument();
  });
  it('should render Tooltip on hover', async () => {
    const user = userEvent.setup();

    renderLinkToPublicProfile();
    expect(screen.queryByRole('button', { name: 'ViewPublicProfile' })).not.toBeInTheDocument();

    await user.hover(screen.getByRole('img', { name: 'info' }));
    expect(screen.getByText('This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ViewPublicProfile' })).toBeInTheDocument();

  });
  it('should call onSetLinked with correct values on checkbox click', async () => {
    const user = userEvent.setup();
    renderLinkToPublicProfile();
    await user.click(screen.getByRole('checkbox', { name: `checkbox-${id}` }));
    expect(mockOnSetLinked).toHaveBeenCalledTimes(1);
    expect(mockOnSetLinked).toHaveBeenCalledWith(id);
  });
});