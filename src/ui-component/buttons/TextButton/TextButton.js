import * as S from './TextButton.styles';

export const TextButton = (props) => {
  return (
    <S.Button
      {...props}
      variant="text-empty"
      color="primary"
      disableRipple
      disableElevation
      disableFocusRipple
      disableTouchRipple
    />
  );
};
