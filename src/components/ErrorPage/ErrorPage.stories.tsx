import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import ErrorPage from '.';

export default {
  title: 'My Library/Pages/Error Page',
  component: ErrorPage
} as Meta;

export const Default: React.SFC = ( args ): JSX.Element => <ErrorPage {...args} />;
