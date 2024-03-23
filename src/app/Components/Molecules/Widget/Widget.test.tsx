import { render, screen } from '@testing-library/react';
import { WidgetActionEnum, WidgetSelectedColorEnum, WidgetTypeEnum } from '@customTypes/types';
import Widget from '.';

describe('Widget', () => {
  it('should render Widget with its subcomponents', () => {
    render(<Widget
      colour={WidgetSelectedColorEnum.beige}
      action={WidgetActionEnum.collects}
      type={WidgetTypeEnum.plasticBottles}
      amount={15}
      id={567}
      linked={false}
      active={false} />);
    expect(screen.getByRole('img', { name: 'greenspark-logo' })).toBeInTheDocument();
    expect(screen.getByText('This product collects')).toBeInTheDocument();
    expect(screen.getByText('15 plastic bottles')).toBeInTheDocument();
  });
});