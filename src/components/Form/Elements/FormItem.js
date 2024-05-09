import React from 'react';

import PropTypes from 'prop-types';

import { Box } from '#/components';

const FormItem = ({ children, ...rest }) => (
  <Box d="flex" direction="column" {...rest}>
    {children}
  </Box>
);

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
};

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormItem;
