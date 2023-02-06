import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';
import { CardItem } from 'ui-component/cards/CardItem';

import { ListItemProps } from './ListItem.types';

export const ListItem: FC<ListItemProps> = ({
  title,
  cardTitle,
  cardSubtitle,
  action,
  description,
  icon,
}) => {
  return (
    <Box>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      <CardItem
        icon={icon}
        title={cardTitle}
        subtitle={cardSubtitle}
        action={action}
      />
    </Box>
  );
};
