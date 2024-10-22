import { Components, Theme } from "@mui/material";
import { palette } from "../palette";

declare module '@mui/material/IconButton' {
  interface IconButtonPropsVariantOverrides {
  //  gradient: true;
  }
  interface IconButtonPropsColorOverrides {
   grey: true;
  
  }

}


export const IconButtonStyle: Components<Theme> = {
  MuiIconButton: {
    variants: [
    ],
    styleOverrides: {
      root: {
  
      },
   
    }
  }
}