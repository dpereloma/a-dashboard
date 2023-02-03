import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthLogin } from 'features/auth/hooks';
import { AuthLoginFormValues } from './AuthLoginForm.types';

export const useAuthLoginForm = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(true);

  const { login, error } = useAuthLogin();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleSubmit = async ({ email, password }: AuthLoginFormValues) => {
    login(
      {
        password,
        username: email,
      },
      {
        onSuccess: () => {
          navigate('/');
        },
      },
    );
    // try {
    //   if (scriptedRef.current) {
    //     setStatus({ success: true });
    //     setSubmitting(false);
    //   }
    // } catch (err) {
    //   console.error(err);
    //   if (scriptedRef.current) {
    //     setStatus({ success: false });
    //     setErrors({ submit: err.message });
    //     setSubmitting(false);
    //   }
    // }
  };

  return {
    showPassword,
    checked,
    error,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
    setChecked,
  };
};
