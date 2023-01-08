import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import { PhoneInput } from './PhoneInput';
import { LoadingButton } from 'ui-component/buttons/LoadingButton';
import { CountriesDialog } from '../CountriesDialog';

const getValidationSchema = () =>
  yup.object().shape({
    mask: yup.string().required(),
    phone: yup
      .string()
      .required()
      .test('is-phone', 'Неверный телефон', (value, { parent }) => {
        const maskLength = parent.mask?.replace(/\D/g, '')?.length;
        const valueLength = value?.replace(/\D/g, '').length;
        return typeof valueLength === 'number' && maskLength === valueLength;
      }),
  });

export const PhoneForm = ({
  errorMsg,
  loading,
  country,
  onChangeCountry,
  onSubmit,
}) => {
  const [openCountries, setOpenCountries] = useState(false);

  const formik = useFormik({
    validationSchema: getValidationSchema(),
    initialValues: { phone: '', mask: country.phoneMask },
    onSubmit: ({ phone }) => onSubmit(phone),
    enableReinitialize: true,
  });

  const isButtonDisabled = /\d/.test(formik.values.phone);
  console.log(country.code);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mt={4} mb={2}>
        <PhoneInput
          name="phone"
          country={country}
          label="Телефон"
          value={formik.values.phone}
          error={(formik.touched.phone && !!formik.errors.phone) || !!errorMsg}
          helperText={
            errorMsg ? errorMsg : formik.touched.phone && formik.errors.phone
          }
          onChange={formik.handleChange}
          onCountrySelectClick={() => setOpenCountries(true)}
        />
      </Box>
      <Box mt={4}>
        <LoadingButton
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disabled={!formik.dirty || !isButtonDisabled}
          loading={loading}
        >
          Далее
        </LoadingButton>
      </Box>
      <CountriesDialog
        country={country}
        open={openCountries}
        onClose={() => setOpenCountries(false)}
        onCountrySelect={(country) => {
          onChangeCountry(country);
          setOpenCountries(false);
        }}
      />
    </form>
  );
};
