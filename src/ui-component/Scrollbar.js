import React, { forwardRef } from 'react';
import SimpleBar from 'simplebar-react';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'simplebar/dist/simplebar.min.css';

export const Scrollbar = forwardRef((props, ref) => (
  <SimpleBar style={{ height: '100%' }} {...props} ref={ref} />
));

Scrollbar.displayName = 'Scrollbar';
