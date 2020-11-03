import React from 'react';

// PATTERN: Typescript
export interface FieldProps {
  inputKey: string,
  label: string,
  type: string,
  onChange: ( e ) => void,
  onBlur: ( e ) => void,
  value: any,
  placeholder: string,
  error?: string | any;
}

// PATTERN: Stateless Component, Destructuring Arguments
const Field: React.FC<FieldProps> = ( { inputKey, label, type, onChange, onBlur, value, placeholder, error } ) => {
  return (
    <>
      <label form={inputKey}>{label}</label>
      <input
        id={inputKey}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder} />
      <span>{error}</span>
    </>
  );
};

export default Field;
