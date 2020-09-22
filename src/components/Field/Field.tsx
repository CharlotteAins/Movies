import React, {ChangeEvent, useCallback, useMemo} from 'react';
import styles from "../FormAdd/FormAdd.module.css";

interface FieldProps {
    inputKey: string,
    label: string,
    type: string,
    onChangeHandler: (key: string, value: any) => void,
    value: any,
    placeholder: string,
    error?: string
}

const Field: React.FC<FieldProps> = ({inputKey, label, type, onChangeHandler, value, placeholder, error}) => {

    const inputHandler = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
            let inputValue = type === 'number' ? +e.target.value : e.target.value;
            onChangeHandler(inputKey, inputValue)
        }, [type]);


    return (
        <>
            <label form={inputKey}>{label}</label>
            <input
                id={inputKey}
                type={type}
                onChange={inputHandler}
                value={value}
                placeholder={placeholder}/>
            <span>{error}</span>
        </>
    );
};

export default Field;
