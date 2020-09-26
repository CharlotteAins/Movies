import React, {ChangeEvent, useCallback, useMemo} from 'react';
import styles from "../FormAdd/FormAdd.module.css";

interface FieldProps {
    inputKey: string,
    label: string,
    type: string,
    onChange: (e) => void,
    onBlur: (e) => void,
    value: any,
    placeholder: string,
    error?: string | any
}

const Field: React.FC<FieldProps> = ({inputKey, label, type, onChange, onBlur, value, placeholder, error}) => {

    return (
        <>
            <label form={inputKey}>{label}</label>
            <input
                id={inputKey}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}/>
            <span>{error}</span>
        </>
    );
};

export default Field;
