import React from 'react';

import PropTypes from 'prop-types';

import { StyledPopover, StyledPopoverWrapper } from './Popover.styled';

const Popover = ({ radius, ...rest }) => {
  return (
    <StyledPopoverWrapper radius={radius}>
      <StyledPopover {...rest} getPopupContainer={(triggerNode) => triggerNode.parentElement} />
    </StyledPopoverWrapper>
  );
};

Popover.propTypes = {
  radius: PropTypes.number,
};

Popover.defaultProps = {
  radius: 5,
};

export default Popover;
