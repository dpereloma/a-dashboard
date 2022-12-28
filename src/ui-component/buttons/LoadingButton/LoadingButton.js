import { CircularProgress } from '@mui/material';

import * as S from './LoadingButton.styles';

export const LoadingButton = ({ loading, children, disabled, ...props }) => {
    return (
        <S.Button disabled={loading || disabled} {...props}>
            <S.Label visible={loading}>{children}</S.Label>
            {loading && (
                <S.Loading>
                    <CircularProgress size={24} color="secondary" />
                </S.Loading>
            )}
        </S.Button>
    );
};
