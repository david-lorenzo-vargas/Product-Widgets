import { render, screen } from '@testing-library/react';
import WidgetHeader from '.';
import { WidgetActionEnum, WidgetSelectedColorEnum } from '@customTypes/types';

describe('WidgetHeader', () => {
  it('should render WidgetHeader with its subcomponents', () => {
    render(<WidgetHeader bgColour={WidgetSelectedColorEnum.beige} subTitle="subTitle" action={WidgetActionEnum.offsets} />);
    expect(screen.getByRole('img', { name: 'greenspark-logo' })).toBeInTheDocument();
    expect(screen.getByText('This product offsets')).toBeInTheDocument();
    expect(screen.getByText('subTitle')).toBeInTheDocument();
  });
});