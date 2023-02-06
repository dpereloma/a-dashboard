import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    customInput: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    customInput?: React.CSSProperties;
  }
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {
    // colors: any;
    // heading: any;
    // paper: any;
    // backgroundDefault: any;
    // background: any;
    // darkTextPrimary: any;
    // darkTextSecondary: any;
    // textDark: any;
    // menuSelected: any;
    // menuSelectedBack: any;
    // divider: any;
    // customization: any;
  }
}
