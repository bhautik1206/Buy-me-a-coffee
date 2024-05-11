export const RESPONSIVE_LAYOUT = {
  xs: 580,
  sm: 768,
  md: 992,
  lg: 1199,
};

export const size = {
  mobile: `580px`,
  tablet: `769px`,
  laptop: `992px`,
  desktop: `1199px`,
};

export const device = {
  screenLargerThanMobile: `@media only screen and (min-width: ${size.mobile})`,
  screenLargerThanTablet: `@media only screen and (min-width: ${size.tablet})`,
  screenLargerThanLaptop: `@media only screen and (min-width: ${size.laptop})`,
  screenDesktopAndLarger: `@media only screen and (min-width: ${size.desktop})`,
  screenSmallerThanMobile: `@media only screen and (max-width: ${size.mobile})`,
  screenSmallerThanTablet: `@media only screen and (max-width: ${size.tablet})`,
  screenSmallerThanLaptop: `@media only screen and (max-width: ${size.laptop})`,
};

export const mediaSizes = [
  `(min-width: ${size.mobile})`,
  `(min-width: ${size.tablet})`,
  `(min-width: ${size.laptop})`,
  `(min-width: ${size.desktop})`,
];
