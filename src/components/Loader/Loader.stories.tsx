import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Loader from '.';

export default {
  title: 'My Library/Loaders/Loader',
  component: Loader
} as Meta;

export const Default: React.SFC = ( args ): JSX.Element => <Loader {...args} />;
