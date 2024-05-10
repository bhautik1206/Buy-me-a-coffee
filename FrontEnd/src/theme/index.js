import Color from 'color';

const primary = Color('#1A265A');
const secondary = Color('#F1600D');
const black = '#000000';
const orange = '#F2994A';
const cadetBlue = '#50A5B1';

const alertErrorLight = 'hsla(10, 80%, 40%, 0.547)';
const alertErrorLighter = 'rgba(182, 47, 20, 0.1)';
const alertErrorDark = 'hsla(10, 90%, 32%, 1)';
const alertSuccess = 'hsla(147, 77%, 27%, 1)';
const alertSuccessLight = 'hsla(147, 77%, 27%, 0.547)';
const alertSuccessLighter = 'hsla(147, 77%, 27%, 0.1)';
const alertSuccessDark = 'hsla(147, 59%, 23%, 1)';
const blackCosmo = 'hsla(0, 0%, 0%, 1)';
const blackMediumGrey = 'hsla(80, 1%, 54%, 1)';
const white = '#FFFFFF';
const alertWarning = 'hsla(28, 87%, 62%, 1)';
const alertWarningLight = 'hsla(28, 87%, 62%, 0.547)';
const alertWarningLighter = 'hsla(28, 87%, 62%, 0.1)';
const alertWarningDark = 'hsla(28, 100%, 56%, 1)';

const fonts = {
  black: '"roboto_black"',
  bold: '"roboto_bold"',
  light: '"roboto_light"',
  regular: '"roboto_regular"',
  medium: '"roboto_medium"',
  thin: '"roboto_thin"',
};

const defaultTheme = {
  color: {
    primary: {
      primary,
      secondary: '#48517B',
      medium: '#f9f9f9',
      dark: '#0D0D0D',
      cadetBlue,
      lighter: '#E8E9EF',
      extraLight: '#F4F4F7',
    },
    secondary: {
      primary: secondary,
      secondary,
      dark: secondary,
    },
    yellow: {
      primary: '#FDD97E',
    },
    grey: {
      primary: '#DCDAD9',
      secondary: '#D9D9D9',
      lighter: '#F7F8F3',
      dark: '#89898A',
    },
    warning: {
      primary: alertWarning,
      medium: alertWarningLight,
      lighter: alertWarningLighter,
      dark: alertWarningDark,
    },
    error: {
      primary: '#F8191E',
      secondary: '#F8191E',
      medium: alertErrorLight,
      lighter: alertErrorLighter,
      dark: alertErrorDark,
    },
    success: {
      primary: alertSuccess,
      dark: alertSuccessDark,
      medium: alertSuccessLight,
      light: alertSuccessLight,
      lighter: alertSuccessLighter,
    },
    black: { primary: black, lighter: blackMediumGrey, dark: blackCosmo },
    blue: {
      primary: '#1E44E9',
      secondary: '#2A8FF7',
    },
    white: {
      primary: white,
    },
    green: alertSuccess,
    red: '#F8191E',
    orange: {
      primary: orange,
      lighter: alertWarningLighter,
    },
    loader: {
      background: '#f3f3f3',
      foreground: '#ecebeb',
    },
  },
  sizes: {
    large: {
      button: 40,
      icon: 20,
    },
    medium: {
      button: 36,
      icon: 20,
    },
    small: {
      button: 32,
      icon: 18,
    },
    xsmall: {
      button: 28,
      icon: 16,
    },
  },
  fontFamily: {
    main: fonts.regular,
    ...fonts,
  },
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  text: {
    primary: white,
    secondary: '#BDBDBD',
  },
  fontSize: {
    heading: {
      xlarge: `4.8rem`,
      large: `3.6rem`,
      normal: `2.8rem`,
      small: `2.4rem`,
      xsmall: `1.8rem`,
    },
    title: {
      xlarge: `2.2rem`,
      large: `2.0rem`,
      normal: `1.8rem`,
      small: `1.6rem`,
      xsmall: `1.4rem`,
    },
    subtitle: {
      xlarge: `2.0rem`,
      large: `1.8rem`,
      normal: ` 1.6rem`,
      small: `1.4rem`,
      xsmall: ` 1.2rem`,
    },
    body: {
      xlarge: `2.0rem`,
      large: `1.8rem`,
      normal: `1.6rem`,
      small: `1.4rem`,
      xsmall: `1.2rem`,
    },
    label: {
      xlarge: `1.8rem`,
      large: `1.6rem`,
      normal: `1.4rem`,
      small: `1.2rem`,
      xsmall: `1.0rem`,
    },
    caption: {
      xlarge: `1.8rem`,
      large: `1.6rem`,
      normal: `1.4rem`,
      small: `1.2rem`,
      xsmall: `1.0rem`,
    },
    button: { large: 14, medium: 14, small: 12, xsmall: 10 },
  },
  lineHeight: {
    heading: {
      xlarge: `150%`,
      large: `150%`,
      normal: `150%`,
      small: `150%`,
      xsmall: `150%`,
    },
    title: {
      xlarge: `150%`,
      large: `150%`,
      normal: `150%`,
      small: `150%`,
      xsmall: `150%`,
    },
    subtitle: {
      xlarge: `150%`,
      large: `150%`,
      normal: `150%`,
      small: `150%`,
      xsmall: `150%`,
    },
    body: {
      xlarge: `150%`,
      large: `150%`,
      normal: `150%`,
      small: `150%`,
      xsmall: `150%`,
    },
    label: {
      xlarge: `150%`,
      large: `150%`,
      normal: `150%`,
      small: `150%`,
      xsmall: `150%`,
    },
    caption: {
      xlarge: `150%`,
      large: `150%`,
      normal: `150%`,
      small: `150%`,
      xsmall: `150%`,
    },
    button: { large: 21, medium: 21, small: 18, xsmall: 15 },
  },
  button: {
    large: {
      padding: `10px 24px 9px 24px`,
      iconOnlyPadding: `10px 10px`,
      height: 40,
      fontSize: 14,
      lineHeight: 21,
    },
    medium: {
      padding: `8px 24px 7px 24px`,
      iconOnlyPadding: `8px 16px`,
      height: 36,
      fontSize: 14,
      lineHeight: 21,
    },
    small: {
      padding: `7px 24px`,
      iconOnlyPadding: `7px 16px`,
      height: 32,
      fontSize: 12,
      lineHeight: 18,
    },
    xsmall: {
      padding: `6px 24px`,
      iconOnlyPadding: `7px 16px`,
      height: 28,
      fontSize: 10,
      lineHeight: 15,
    },
  },
  shadows: {
    none: `none`,
    0: `none`,
    1: `0px 1px 18px 0px rgba(15, 15, 15, 0.12)`,
    2: `0px 1px 10px rgba(15, 15, 15, 0.12)`,
    3: `0px 1px 18px rgba(15, 15, 15, 0.12)`,
  },
  border: {
    radius: {
      5: `5px`,
      6: `6px`,
      10: `10px`,
    },
  },
  input: {
    fontSize: `14px`,
    lineHeight: `150%`,
    large: {
      padding: '10px 15px',
      icon: 24,
    },
    medium: {
      padding: `8px 15px`,
      icon: 20,
    },
    small: {
      padding: `6px 15px`,
      icon: 20,
    },
  },
};

export default defaultTheme;
