import React from 'react';

import PropTypes from 'prop-types';

import { StyledButton, StyledFooterSection, StyledFormFooterContainer } from './Form.styled';

const FormFooter = ({ primarySection, secondarySection }) => {
  const renderButton = (buttonProps, index) => {
    return <StyledButton key={index} {...buttonProps} />;
  };

  return (
    <StyledFormFooterContainer>
      {secondarySection?.length && <StyledFooterSection>{secondarySection.map(renderButton)}</StyledFooterSection>}
      {primarySection?.length && <StyledFooterSection>{primarySection.map(renderButton)}</StyledFooterSection>}
    </StyledFormFooterContainer>
  );
};

FormFooter.propTypes = {
  primarySection: PropTypes.arrayOf,
  secondarySection: PropTypes.arrayOf,
};

FormFooter.defaultProps = {
  primarySection: [],
  secondarySection: [],
};

export default FormFooter;
