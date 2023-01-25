declare module '@mui/material/styles' {
  interface TypographyVariants {
    customInput: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    customInput?: React.CSSProperties;
  }
}
