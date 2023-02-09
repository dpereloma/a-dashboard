import * as Yup from 'yup';

export const ChargeSessionFormValidation = Yup.object().shape({
  startDate: Yup.date()
    .test('startDate', 'No more than the end date', (value, context) => {
      return !(
        value &&
        context.parent.endDate &&
        value > context.parent.endDate
      );
    })
    .nullable(),
  endDate: Yup.date()
    .test('endDate', 'No less than the start date', (value, context) => {
      return !(
        value &&
        context.parent.startDate &&
        value > context.parent.startDate
      );
    })
    .nullable(),
  search: Yup.string(),
});
