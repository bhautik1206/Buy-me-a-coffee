import React, { useCallback, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import { Container } from './Image.styled';

import useOnScreen from '../../hooks/useOnScreen';

const Image = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [style, setStyle] = useState({ opacity: 0 });
  const imgRef = useRef();

  const visible = useOnScreen(imgRef);

  const handleOnLoad = () => {
    setLoaded(true);
    setStyle((prevStyle) => ({ ...prevStyle, opacity: 1 }));
  };

  const ImageBase = useCallback(
    ({ ...rest }) => {
      return <img src={src} alt={alt} {...rest} />;
    },
    [src, alt]
  );

  return (
    <Container ref={imgRef}>
      {(loaded || visible) && <ImageBase alt={alt} src={src} style={style} onLoad={handleOnLoad} {...props} />}
    </Container>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
