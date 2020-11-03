import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Field from '.';
import { FieldProps } from './Field';

export default {
  title: 'My Library/Fields And Inputs/Field',
  component: Field
} as Meta;

const Template: React.SFC<FieldProps> = ( args ): JSX.Element => <Field {...args} />;

export const Default = Template.bind( {} );

Default.args = {
  label: 'Default Label',
  type: 'text',
  placeholder: 'Some Text'
};
