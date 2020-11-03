import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import PrettyButton from '.';
import { ButtonProps } from './PrettyButton';

export default {
  title: 'My Library/Components/Pretty Button',
  component: PrettyButton
} as Meta;

const Template: React.SFC<ButtonProps> = ( args ): JSX.Element => <PrettyButton {...args} />;

export const Default = Template.bind( {} );

Default.args = {
  text: 'Default'
};
