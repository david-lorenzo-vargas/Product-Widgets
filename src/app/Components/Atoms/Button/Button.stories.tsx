import { ReactElement } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    bgColour: {
      name: 'bgColour',
      type: 'string',
      options: ['bg-blue', 'bg-green', 'bg-black', 'bg-white', 'bg-beige'],
      control: {type: 'select'},
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  children,
  size,
  bgColour,
  padding,
  rounded,
  border,
  onClick,
  disabled,
  type,
  id,
  selected,
}: Props) => 
    <Button
      children={children}
      size={size}
      bgColour={bgColour}
      padding={padding}
      rounded={rounded}
      border={border}
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
      selected={selected}
    />;

export const Default = Template.bind({});

Default.args = {
  size: "h-16 w-16",
  id: "button-1",
  type: "button",
  bgColour: "bg-blue",
  selected: false
};

export const Checked = Template.bind({});
Checked.args = {
  size: "h-16 w-16",
  id: "button-2",
  type: "button",
  bgColour: "bg-blue",
  selected: true
};

interface Props {
  children?: ReactElement;
  size?: string;
  bgColour?: string;
  padding?: string;
  rounded?: string;
  border?: string;
  onClick?: () => void;
  disabled?: boolean;
  type: 'submit' | 'button';
  id: string;
  selected?: boolean;
}