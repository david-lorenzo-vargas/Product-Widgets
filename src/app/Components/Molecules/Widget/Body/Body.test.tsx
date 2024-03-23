import { render, screen } from '@testing-library/react';
import { WidgetSelectedColorEnum } from '@customTypes/types';
import Body from '.';

describe('Body', () => {
  it('should render Body with its subcomponents', () => {
    render(<Body id={123} linked={false} active={false} colourSelected={WidgetSelectedColorEnum.black} />);
    expect(screen.getByText('Link to Public Profile')).toBeInTheDocument();
    expect(screen.getByText('Badge colour')).toBeInTheDocument();
    expect(screen.getByText('Activate badge')).toBeInTheDocument();

    expect(screen.getByRole('checkbox', { name: 'checkbox-123' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'checkbox-123' })).not.toBeChecked();
    expect(screen.getByRole('button', { name: '123-black' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'toggle-123' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'toggle-123' })).not.toBeChecked();
  });
});