import React from 'react';

import PropsTypes from 'prop-types';

import { Box } from '#/components';

const FormItemGroup = ({ children, ...rest }) => (
  <Box d="flex" direction="row" gap={1} {...rest}>
    {children}
  </Box>
);

FormItemGroup.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default FormItemGroup;
