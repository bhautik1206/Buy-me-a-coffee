import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
`;
