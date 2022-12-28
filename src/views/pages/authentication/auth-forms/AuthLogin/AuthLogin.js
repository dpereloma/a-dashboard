import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Box, CircularProgress } from '@mui/material';
import { PhoneForm } from './PhoneForm';
import { CodeForm } from './CodeForm';

import { useCountdown } from 'hooks';
import { authActions } from 'store/authSlice';
import { countries } from './CodeForm/countries';

const FirebaseLogin = ({ ...others }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [country, setCountry] = useState(countries.countries[countries.defaultCountry]);
    const [step, setStep] = useState(0);
    const [phone, setPhone] = useState(null);
    const [maxAttempsAchieved, setMaxAttempsAchieved] = useState(false);
    const [token, setToken] = useState(null);

    const countdown = useCountdown();

    const isReady = true;

    const getFullPhoneNumber = (phoneCode, phone) => (phoneCode + phone).replace(/\D/g, '');

    const handleSendCode = (phone) => {
        const fullPhone = getFullPhoneNumber(country.phoneCode, phone);

        // sendCodeMutation.mutate(
        //   { data: { phone: fullPhone } },
        //   {
        //       onSuccess: (data) => {
        //           loginMutation.reset();
        //           const resendCodeDeley = config.get<number>('auth.codeSendDelay');
        //           countdown.start(resendCodeDeley);
        //           setToken(data.token);
        //           setPhone(phone);
        //           setStep(1);
        //           options?.onSendCodeSuccess?.(data);
        //       },
        //       onError: options?.onSendCodeError,
        //   },
        // );
        countdown.start(60);
        setPhone(phone);
        setStep(1);
    };

    const handleResendCode = () => {
        if (!phone) {
            console.log('Phone number not defined.');
            return;
        }
        handleSendCode(phone);
    };

    const handleLogin = (code) => {
        if (!phone) {
            console.log('Phone number not defined.');
            return;
        }
        // if (!token) {
        //     console.log('Token not defined.');
        //     return;
        // }

        const fullPhone = getFullPhoneNumber(country.phoneCode, phone);

        setMaxAttempsAchieved(false);
        // login({ isAuth: true });
        dispatch(authActions.login());
        localStorage.setItem('isAuth', 'true');
        // loginMutation.mutate(
        //   {
        //       token,
        //       data: {
        //           phone: fullPhone,
        //           code,
        //           details: {
        //               appVer: APP_CONFIG.version,
        //               project: APP_CONFIG.project,
        //               platform: APP_CONFIG.platform,
        //               browser: navigator.userAgent,
        //           },
        //       },
        //   },
        //   {
        //       onSuccess: (data) => {
        //           countdown.reset();
        //           session.set(data.token);
        //           options?.onLoginSuccess?.(data);
        //       },
        //       onError: (error) => {
        //           if (options?.onLoginError) {
        //               options?.onLoginError(error);
        //           }
        //
        //           if (error.code === 'AUTH-146') {
        //               setMaxAttempsAchieved(true);
        //           }
        //       },
        //       onSettled: () => {
        //           queryClient.invalidateQueries(userQueryKey(USER_ME));
        //           queryClient.invalidateQueries(clientQueryKey(CLIENT_ME));
        //       },
        //   },
        // );
        navigate('/');
    };

    return (
        <>
            <Box hidden={isReady} textAlign={'center'}>
                <CircularProgress />
            </Box>
            <Box hidden={!isReady}>
                <Box hidden={step !== 0}>
                    <PhoneForm
                        country={country}
                        loading={false}
                        onSubmit={(...args) => {
                            handleSendCode(...args);
                        }}
                        onChangeCountry={setCountry}
                        errorMsg={''}
                    />
                </Box>
                <Box hidden={step !== 1}>
                    <CodeForm
                        hackValue={step}
                        resendTimer={countdown.current}
                        loading={false}
                        enableResend={countdown.status === 'finished'}
                        phone={`${country.phoneCode} ${phone}`}
                        errorMsg={''}
                        // errorMsg={getError(LocaleKeys.SIGN_IN_ERROR_CODE_ENTER_LIMIT, loginMutation.error)}
                        codeErrorMsg={''}
                        // codeErrorMsg={getError(LocaleKeys.SIGN_IN_ERROR_CODE_SEND_LIMIT, sendCodeMutation.error)}
                        maxAttempsAchieved={maxAttempsAchieved}
                        onResendCode={handleResendCode}
                        onBack={() => setStep(0)}
                        onSubmit={(...args) => handleLogin(...args)}
                    />
                </Box>
            </Box>
        </>
    );
};

export default FirebaseLogin;
