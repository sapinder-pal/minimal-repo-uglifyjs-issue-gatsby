const commonColors = {
  brightText: 'hsl(0, 0%, 100%)',
  shadow: 'rgba(0, 0, 0, .25)',
  shadowDepth: 'rgba(0, 0, 0, .3)',
  sun: 'hsl(36, 100%, 50%)',
  heart: 'hsl(333, 93%, 56%)',
  inactive: 'hsla(216, 10%, 50%, 0.73)',
};
export const lightTheme = {
  primary: 'hsl(310, 100%, 40%)',
  secondary: 'hsl(241, 48%, 48%)',
  mainBg: 'hsl(0, 0%, 95%)',
  secondaryBg: 'hsl(0, 0%, 100%)',
  codeSnippetBg: 'hsl(0, 0%, 100%)',
  regularText: 'hsl(0, 0%, 0%)',
  ...commonColors,
};
export const darkTheme = {
  primary: 'hsl(14, 95%, 60%)',
  secondary: 'hsl(39, 100%, 63%)',
  mainBg: 'hsl(0, 0%, 17%)',
  secondaryBg: 'hsl(0, 0%, 5%)',
  regularText: 'hsl(0, 0%, 87%)',
  codeSnippetBg: 'hsl(0, 0%, 5%)',
  ...commonColors,
};
