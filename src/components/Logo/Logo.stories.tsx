import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Logo from '.';

export default {
  title: 'My Library/Components/Logo',
  component: Logo
} as Meta;

export const Default: React.SFC = ( args ): JSX.Element => <Logo {...args} />;
