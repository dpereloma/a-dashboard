import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';

import { useDeviceIsDown } from 'hooks';

export const useCodeForm = (hackValue, onSubmit) => {
    const isMobile = useDeviceIsDown('laptop');
    const abortRef = useRef(new AbortController());
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: { code: '', hackValue },
        onSubmit: ({ code }) => {
            onSubmit(code);
            abortRef.current.abort();
        },
    });

    const isDisabled = formik.values.code.length !== 4;
    const formatSeconds = (seconds) => {
        const m = Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, '0');
        const s = Math.floor(seconds % 60)
            .toString()
            .padStart(2, '0');
        return `${m}:${s}`;
    };
    useEffect(() => {
        if (typeof window !== 'undefined' && 'OTPCredential' in window) {
            window.navigator.credentials
                .get({
                    otp: { transport: ['sms'] },
                    signal: abortRef.current.signal,
                })
                .then((otr) => {
                    if (otr && otr.code) {
                        formik.setFieldValue('code', otr.code);
                        formik.submitForm();
                    }
                })
                .catch(() => {});
        }
    }, [formik]);

    useEffect(() => {
        if (formik.values.code.length === 4) {
            formik.submitForm();
        }
    }, [formik.values]);

    return {
        handleSubmit: formik.handleSubmit,
        values: formik.values,
        setFieldValue: formik.setFieldValue,
        formatSeconds,
        isMobile,
        isDisabled,
    };
};
