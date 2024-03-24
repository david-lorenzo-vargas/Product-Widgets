import { ReactElement, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Tooltip from '.';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      name: 'position',
      type: 'string',
      options: ['top', 'bottom', 'left', 'right', 'bottom-left', 'bottom-right', 'top-left'],
      control: {type: 'select'},
    },
  },
} as Meta<typeof Tooltip>;

const ChildComponent = () => <div className="h-50 w-50 bg-white shadow-xl"><span>hello</span></div>

const Template: StoryFn<typeof Tooltip> = ({
  position
}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className="relative bg-green h-57 w-221 flex flex-row items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-sm text-white">
        Hover here to see the tooltip
      </span>
      {hovered && (
        <Tooltip
          position={position}
        >
          <ChildComponent />
        </Tooltip>
      )}
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  position: 'bottom',
};

interface Props {
  children: ReactElement;
  position: 'top' | 'bottom' | 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'top-left'
}