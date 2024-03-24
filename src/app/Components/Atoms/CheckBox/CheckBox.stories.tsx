import { Meta, StoryFn } from '@storybook/react';

import CheckBox from '.';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = ({
  size="h-18 w-18",
  boxId,
  label,
  checked,
  onClick}: Props) => 
    <CheckBox
      boxId={boxId}
      checked={checked}
      onClick={onClick}
      label={label}
      size={size}
    />;

export const Default = Template.bind({});
Default.args = {
  boxId: 'checkbox',
  checked: false,
};

interface Props {
  size?: string;
  boxId: string;
  label?: string;
  checked: boolean;
  onClick?: () => void;
}