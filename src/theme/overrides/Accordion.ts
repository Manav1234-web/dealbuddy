import { alpha, Components, Theme } from '@mui/material';

export const AccordionStyle: Components<Theme> = {
  MuiAccordionSummary: {
    styleOverrides: {
      content: {
        margin: 0,
        '& $expanded':{
            margin: 0,
        }
      },
     
    },
  },
};
