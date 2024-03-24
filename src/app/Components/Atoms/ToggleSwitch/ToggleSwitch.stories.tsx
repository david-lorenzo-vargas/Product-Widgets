import { useState, useCallback, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ToggleSwitch from '.';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<typeof ToggleSwitch>;

const Template: StoryFn<typeof ToggleSwitch> = ({
  id,
  isChecked,
  onClick,
}: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(() => !!isChecked);
  }, [isChecked]);

  const onCheck = useCallback(() => {
    setChecked((c: boolean) => !c);
    onClick();
  }, []);

  return (
    <div className="flex flex-row items-center justify-between w-221">
      <span className="font-cabin text-green text-sm">
        Activate toggle
      </span>
      <ToggleSwitch
        onClick={onCheck}
        id="toggle-1"
        isChecked={checked}
      />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  id: 'toggle-switch',
  isChecked: false,
};

interface Props {
  id?: string;
  isChecked?: boolean;
  onClick: () => void;
}