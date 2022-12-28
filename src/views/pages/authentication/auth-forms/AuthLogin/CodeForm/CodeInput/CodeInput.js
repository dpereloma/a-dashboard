import React from 'react';

import { FormHelperText } from '@mui/material';

import { useCodeInput } from './CodeInput.utils';
import * as S from './CodeInput.styles';

export function CodeInput({
    value,
    size = 4,
    disabled,
    autoFocus,
    inputProps,
    error,
    helperText,
    onChange,
    renderWrapper = (children) => <S.DefaultWrapper>{children}</S.DefaultWrapper>,
    renderInput = (props) => <S.DefaultInput {...props} />,
    ...props
}) {
    const { inputValues, handleChange, handleKeyDown, inputRefs, uuidRef } = useCodeInput(size, value, onChange);

    return (
        <>
            {renderWrapper(
                <>
                    {inputValues.map((value, i) => (
                        <React.Fragment key={`${uuidRef.current}-${i}`}>
                            {renderInput({
                                ref: (ref) => (inputRefs.current[i] = ref),
                                'data-id': i,
                                autoFocus: autoFocus && i === 0,
                                value: value,
                                type: 'text',
                                min: 0,
                                max: 1,
                                maxLength: 1,
                                error,
                                inputmode: 'numeric',
                                onFocus: (e) => e.target.select(),
                                onChange: handleChange,
                                onKeyDown: handleKeyDown,
                                disabled: disabled,
                                ...inputProps
                            })}
                        </React.Fragment>
                    ))}
                </>
            )}
            {!!helperText && (
                <FormHelperText sx={{ marginTop: 2 }} error={error}>
                    {helperText}
                </FormHelperText>
            )}
        </>
    );
}
