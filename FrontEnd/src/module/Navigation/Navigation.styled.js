import styled from 'styled-components';

export const StyledNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledNavbarLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 0 0 0 15px;
`;

export const StyledNavbarLeftDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const StyledLogoWrapper = styled.div``;

export const StyledLogoImage = styled.img``;

export const StyledNavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledCreatorSearch = styled.input`
  border-radius: 12px;
  padding: 10px;
  border: none;
  background-color: #f2f2f2;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const StyledLoginBtn = styled.button`
  border: 0px;
  background-color: #ffffff;
  font-size: 16px;
`;

export const StyledSignUp = styled.button`
  border: 1px solid #ffffff;
  background-color: #ffdd00;
  font-size: 16px;
  padding: 16px;
  border-radius: 30px;
`;
