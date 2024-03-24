import { StoryFn, Meta } from '@storybook/react';

import Spinner from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

export const Spin: StoryFn<typeof Spinner> = () => <Spinner />;
