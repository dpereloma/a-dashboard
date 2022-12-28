import { useEffect, useRef, useState } from 'react';

import { Helpers } from 'helpers';

export const useCodeInput = (size, value, onChange) => {
    const sizeRef = useRef(size);
    const uuidRef = useRef(Helpers.uuid());
    const inputRefs = useRef([]);
    const BACKSPACE_KEY = 8;
    const LEFT_ARROW_KEY = 37;
    const UP_ARROW_KEY = 38;
    const RIGHT_ARROW_KEY = 39;
    const DOWN_ARROW_KEY = 40;
    const E_KEY = 69;

    // Initialize input values
    const [inputValues, setInputValues] = useState(() => {
        return [...Array(size)].map((_, idx) => value?.[idx] ?? '');
    });

    const _handleChange = (newInputValues) => {
        const newInputValue = newInputValues.join('');

        setInputValues(newInputValues);
        onChange?.(newInputValue);
    };

    const handleChange = (event) => {
        const targetId = Number(event.target.dataset.id);

        let newValue = event.target.value;
        const newInputValues = [...inputValues];

        newValue = newValue.replace(/[^\d]/g, '');

        if (newValue !== '') {
            newInputValues[targetId] = newValue[0];

            if (inputRefs.current[targetId]) {
                inputRefs.current[targetId].value = newInputValues[targetId];
            }

            const newTarget = inputRefs.current[targetId + 1];

            if (newTarget) {
                newTarget.focus();
                newTarget.select();
            }
        }

        _handleChange(newInputValues);
    };

    const handleKeyDown = (event) => {
        const eventTarget = event.target;
        const targetId = Number(eventTarget.dataset.id);
        const currTarget = inputRefs.current[targetId];
        const nextTarget = inputRefs.current[targetId + 1];
        const prevTarget = inputRefs.current[targetId - 1];

        let newInputValues, newValue;

        switch (event.keyCode) {
            case BACKSPACE_KEY:
                event.preventDefault();

                if (currTarget) {
                    currTarget.value = '';
                }

                newInputValues = [...inputValues];
                newInputValues[targetId] = '';
                newValue = newInputValues.join('');

                _handleChange(newInputValues);

                if (currTarget?.value === '') {
                    if (prevTarget) {
                        prevTarget.focus();
                        prevTarget.select();
                    }
                }
                break;
            case LEFT_ARROW_KEY:
                event.preventDefault();
                if (prevTarget) {
                    prevTarget.focus();
                    prevTarget.select();
                }
                break;
            case RIGHT_ARROW_KEY:
                event.preventDefault();
                if (nextTarget) {
                    nextTarget.focus();
                    nextTarget.select();
                }
                break;
            case UP_ARROW_KEY:
                event.preventDefault();
                break;
            case DOWN_ARROW_KEY:
                event.preventDefault();
                break;
            case E_KEY:
                event.preventDefault();
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (value) {
            const values = [...Array(sizeRef.current)].map((_, idx) => value?.[idx] ?? '');
            setInputValues(values);
        }
        if (!value) {
            setInputValues(['', '', '', '']);
        }
    }, [value]);

    return {
        inputValues,
        uuidRef,
        inputRefs,
        handleChange,
        handleKeyDown
    };
};
