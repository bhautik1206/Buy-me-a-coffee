import styled, { css } from 'styled-components';

import genericStyles from '../utils/genericStyles';

export const commonStyled = css`
  ${({ $width }) => $width && `width: ${$width}`};
  ${({ $truncate }) =>
    $truncate &&
    `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `};

  color: ${({ $color, theme }) => $color || theme.color.black.primary};
  ${({ align }) => align && `text-align: ${align}`};

  font-family: ${({ theme, $weight }) => theme.fontFamily[$weight || 'regular']};
  font-size: ${({ theme, $size }) => theme.fontSize.body[$size || 'normal']};
  font-weight: ${({ theme, $weight }) => theme.fontWeight[$weight || 'normal']};
  line-height: ${({ theme, $size }) => theme.lineHeight.body[$size || 'normal']};
`;

export const StyledH1 = styled.h1`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  font-size: ${({ theme }) => theme.fontSize.heading.xlarge};
  line-height: ${({ theme }) => theme.lineHeight.heading.xlarge};
`;

export const StyledH2 = styled.h2`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  line-height: ${({ theme }) => theme.lineHeight.heading.large};
`;

export const StyledH3 = styled.h3`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  font-size: ${({ theme }) => theme.fontSize.heading.normal};
  line-height: ${({ theme }) => theme.lineHeight.heading.normal};
`;

export const StyledH4 = styled.h4`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  line-height: ${({ theme }) => theme.lineHeight.heading.small};
`;

export const StyledH5 = styled.h5`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  font-size: ${({ theme }) => theme.fontSize.heading.xsmall};
  line-height: ${({ theme }) => theme.lineHeight.heading.xsmall};
`;

export const StyledTitle = styled.div`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme, $size }) => theme.fontSize.title[$size]};
  line-height: ${({ theme, $size }) => theme.lineHeight.title[$size]};
`;

export const StyledSubTitle = styled.div`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme, $size }) => theme.fontSize.subtitle[$size]};
  line-height: ${({ theme, $size }) => theme.lineHeight.subtitle[$size]};
`;

export const StyledParagraph = styled.p`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme, $size }) => theme.fontSize.body[$size]};
  line-height: ${({ theme, $size }) => theme.lineHeight.body[$size]};

  ${({ preTitle }) =>
    preTitle &&
    `
      text-transform: uppercase;
    `};
  ${({ align }) => align && `text-align: ${align}`};
`;

export const StyledLabel = styled.span`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme, $size }) => theme.fontSize.label[$size]};
  line-height: ${({ theme, $size }) => theme.lineHeight.label[$size]};
`;

export const StyledCaption = styled.span`
  ${genericStyles}
  ${commonStyled}
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme, $size }) => theme.fontSize.caption[$size]};
  line-height: ${({ theme, $size }) => theme.lineHeight.caption[$size]};
`;

export const StyledSpan = styled.span`
  ${genericStyles}
  ${commonStyled}
`;

export const StyledDiv = styled.div`
  ${genericStyles}
  ${commonStyled}
`;

export const StyledArticleHead = styled.div`
  ${genericStyles}
  ${commonStyled}
  font-size: ${({ theme }) => theme.fontSize.heading.xsmall};
  line-height: ${({ theme }) => theme.lineHeight.heading.xsmall};
`;

export const StyledArticleSubhead = styled.div`
  ${genericStyles}
  ${commonStyled}
  font-size: ${({ theme }) => theme.fontSize.heading.xsmall};
  line-height: ${({ theme }) => theme.lineHeight.heading.xsmall};
`;
