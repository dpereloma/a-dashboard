import { Box, IconButton } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { ArrowBack, ArrowForward, FirstPage } from '@mui/icons-material';

export interface ArrowPaginationProps {
  page: number;
  hasPrev?: boolean;
  hasNext?: boolean;
  firstPage?: number;
  renderPrevButton?: (
    params: React.HTMLProps<HTMLButtonElement>,
  ) => React.ReactNode;
  renderNextButton?: (
    params: React.HTMLProps<HTMLButtonElement>,
  ) => React.ReactNode;
  renderFirstButton?: (
    params: React.HTMLProps<HTMLButtonElement>,
  ) => React.ReactNode;
  onChange: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void;
}

export function ArrowPagination({
  page,
  firstPage = 1,
  hasPrev,
  hasNext,
  renderFirstButton = (params: any) => (
    <IconButton size="small" {...params}>
      <FirstPage />
    </IconButton>
  ),
  renderNextButton = (params: any) => (
    <IconButton size="small" {...params}>
      <ArrowForward />
    </IconButton>
  ),
  renderPrevButton = (params: any) => (
    <IconButton size="small" {...params}>
      <ArrowBack />
    </IconButton>
  ),
  children,
  onChange,
}: PropsWithChildren<ArrowPaginationProps>) {
  const enableFirstPage = firstPage < page;
  const enablePrevPage = enableFirstPage || hasPrev;
  const enableNextPage = hasNext;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        {enableFirstPage ? (
          <Box mr={1}>
            {renderFirstButton({
              onClick: (event) => onChange(event, firstPage),
            })}
          </Box>
        ) : null}
        <Box>
          {renderPrevButton({
            disabled: !enablePrevPage,
            onClick: (event) => onChange(event, page - 1),
          })}
        </Box>
      </Box>
      <Box>{children}</Box>
      <Box>
        {renderNextButton({
          disabled: !enableNextPage,
          onClick: (event) => onChange(event, page + 1),
        })}
      </Box>
    </Box>
  );
}
