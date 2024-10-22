import { Components, inputLabelClasses, Theme } from '@mui/material';

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    // "small-rounded": true;
    // "medium-rounded": true;
  }
}



export const TextFieldStyle: Components<Theme> = {
  MuiTextField: {
    defaultProps: {
      rows: 0
    },
    variants: [
    ]
  },
  // MuiInputBase: {
  //   styleOverrides: {
  //     // input: ({ theme }) => ({
  //     //   height: 'auto',
  //     //   borderRadius: theme.spacing(0.5),
  //     //   border: `1px solid ${theme.palette.divider}`,
  //     //   background: theme.palette.common.white,
  //     //   padding: theme.spacing(0.5, 1),
  //     // }),
  //   },
  // },
  // MuiOutlinedInput: {
  //   styleOverrides: {
  //     root: {
  //       [`&.${inputLabelClasses.outlined}`]: {
  //         lineHeight: '2em',
  //       },
  //     },
  //     notchedOutline: ({ theme }) => ({
  //       borderRadius: 8,
  //       //border: `1px solid ${theme.palette.divider}`,
  //     }),
  //     input: {
  //       borderRadius: 8,
  //       height: '2em',
  //     },
  //   },
  // },
};
