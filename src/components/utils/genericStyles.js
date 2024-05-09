import { css } from 'styled-components';

export default css`
  ${({ m, ml, mr, mt, mb, mx, my }) => {
    const marginTop = mt || my || m || 0;
    const marginBottom = mb || my || m || 0;
    const marginLeft = ml || mx || m || 0;
    const marginRight = mr || mx || m || 0;

    if (marginTop || marginBottom || marginLeft || marginRight) {
      return `margin: ${marginTop}rem ${marginRight}rem ${marginBottom}rem ${marginLeft}rem`;
    }

    return null;
  }};
  ${({ p, pl, pr, pt, pb, px, py }) => {
    const paddingTop = pt || py || p || 0;
    const paddingBottom = pb || py || p || 0;
    const paddingLeft = pl || px || p || 0;
    const paddingRight = pr || px || p || 0;

    if (paddingTop || paddingBottom || paddingLeft || paddingRight) {
      return `padding: ${paddingTop}rem ${paddingRight}rem ${paddingBottom}rem ${paddingLeft}rem`;
    }

    return null;
  }};
  ${({ d }) => d && `display: ${d};`};
  ${({ flex }) => flex && `flex: ${flex};`};
  ${({ direction }) => direction && `flex-direction: ${direction};`};
  ${({ d, gap }) => d && gap && `${d === 'grid' ? 'grid-gap' : 'gap'}: ${gap}rem;`};
  ${({ gaf }) => gaf && `grid-auto-flow: ${gaf};`};
  ${({ gtc }) => gtc && `grid-template-columns: ${gtc};`};
  ${({ align }) => align && `align-items: ${align};`};
  ${({ justify }) => justify && `justify-content: ${justify};`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`};
  ${({ textcase }) => textcase && `text-transform: ${textcase};`};
`;
