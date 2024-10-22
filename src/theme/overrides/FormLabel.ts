import { Components, Theme } from "@mui/material";

export const FormLabelStyle: Components<Theme> = {
  MuiFormLabel: {
    defaultProps: {
      color: 'primary'
    },
    styleOverrides: {
      root: ({ theme }) => ({
        // ...theme.typography.body2,
        //color: theme.palette.primary.main
      })
    }
  },
};
