import React from 'react';
import {
  StyledLogoWrapper,
  StyledLoginBtn,
  StyledSignUp,
  StyledNavbarContainer,
  StyledNavbarLeft,
  StyledLogoImage,
  StyledNavbarLeftDetails,
  StyledNavbarRight,
  StyledCreatorSearch,
} from './Navigation.styled';
import { Buymeacoffee } from '../../assets/images';

const NavigationView = () => {

  return (
    <div>
      <StyledNavbarContainer>
        <StyledNavbarLeft>
          <StyledNavbarLeftDetails>FAQ</StyledNavbarLeftDetails>
          <StyledNavbarLeftDetails>Wall of ♡</StyledNavbarLeftDetails>
          <StyledNavbarLeftDetails>Resource</StyledNavbarLeftDetails>
        </StyledNavbarLeft>
        {/* <StyledLogoWrapper> */}
        <StyledLogoImage src={Buymeacoffee} />
        {/* </StyledLogoWrapper> */}
        <StyledNavbarRight>
          <StyledCreatorSearch placeholder="Search Creator"></StyledCreatorSearch>
          <StyledLoginBtn>Log In</StyledLoginBtn>
          <StyledSignUp>Sign Up</StyledSignUp>
        </StyledNavbarRight>
      </StyledNavbarContainer>
    </div>
  );
};

export default NavigationView;
