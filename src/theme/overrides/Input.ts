import { Components, Theme } from "@mui/material";

// ----------------------------------------------------------------------

export const Input: Components<Theme> = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
      })
    }
  }
}
