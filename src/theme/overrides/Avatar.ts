import { alpha, Components, Theme } from "@mui/material";

export const AvatarStyle: Components<Theme> = {
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: alpha('#FFFFFF', 0.05),
      },
    }
  }
};
