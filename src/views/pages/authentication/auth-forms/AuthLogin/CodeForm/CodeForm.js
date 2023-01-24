import { Typography, Box } from '@mui/material';
import { TextButton } from 'ui-component/buttons/TextButton';
import { LoadingButton } from 'ui-component/buttons/LoadingButton';
import { CodeInput } from './CodeInput';
import { Button } from 'ui-component/buttons/Button';

import * as S from './CodeForm.styles';
import { useCodeForm } from './CodeForm.utils';

export const CodeForm = ({
  phone,
  loading,
  hackValue,
  resendTimer,
  errorMsg,
  codeErrorMsg,
  enableResend,
  maxAttempsAchieved,
  onResendCode,
  onBack,
  onSubmit,
}) => {
  const {
    handleSubmit,
    values,
    setFieldValue,
    formatSeconds,
    isMobile,
    isDisabled,
  } = useCodeForm(hackValue, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" height="100%">
        <Box flexGrow={1}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography>Введите код из смс</Typography>
          </Box>
          <Box mt={2} mb={2}>
            <S.AutocompleteInput
              autoComplete="one-time-code"
              onChange={(e) => setFieldValue('code', e.target.value)}
            />
            <CodeInput
              size={4}
              value={values.code}
              error={!!errorMsg}
              helperText={errorMsg ? errorMsg : ''}
              onChange={(value) => setFieldValue('code', value)}
            />
          </Box>
          <Box my={4}>
            <Box>
              <Typography>{`Код отправлен на номер ${phone}`}</Typography>
            </Box>
            {typeof resendTimer === 'number' &&
            resendTimer &&
            !maxAttempsAchieved ? (
              <Box mt={4}>
                <Typography>{`Отправить СМС еще раз можнео будет через ${formatSeconds(
                  resendTimer,
                )}`}</Typography>
              </Box>
            ) : null}
          </Box>
          {enableResend && !codeErrorMsg && !maxAttempsAchieved ? (
            <Typography>
              <TextButton
                sx={{ fontSize: 'inherit', fontFamily: 'inherit' }}
                disabled={loading}
                onClick={onResendCode}
              >
                Заново отправить код
              </TextButton>
            </Typography>
          ) : null}
          {codeErrorMsg ? <Typography>{codeErrorMsg}</Typography> : null}
        </Box>
        <S.ActionsContainer>
          <Box hidden={!isMobile} ml={-1.5}>
            <Button
              variant="text"
              disabled={loading}
              onClick={onBack}
              text="Back"
            />
          </Box>
          {!maxAttempsAchieved && (
            <Box flexGrow={1} display="flex" justifyContent="flex-end">
              <LoadingButton
                fullWidth={!isMobile}
                variant="contained"
                color="primary"
                type="submit"
                disabled={isDisabled}
                loading={loading}
              >
                Далее
              </LoadingButton>
            </Box>
          )}
        </S.ActionsContainer>
      </Box>
    </form>
  );
};
