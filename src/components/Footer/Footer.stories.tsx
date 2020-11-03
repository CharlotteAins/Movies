import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Footer from '.';

export default {
  title: 'My Library/Components/Footer',
  component: Footer
} as Meta;

export const Default: React.SFC = ( args ): JSX.Element => <Footer {...args} />;
