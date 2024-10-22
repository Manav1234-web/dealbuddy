import { Components, Theme } from "@mui/material";
import { palette } from "../palette";

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    ['error']: true;
    ['success']: true;
    ['warning']: true;
  }

}



export const TypographyStyle: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(1)
        }
      }),

    }
  }
}

