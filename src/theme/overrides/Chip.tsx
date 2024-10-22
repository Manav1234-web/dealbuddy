import { alpha, Components, Theme } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
      outlineOpacity: true;
      square: true;
  }
  interface ChipPropsColorOverrides {
    grey: true;
  }

}

export const ChipStyle: Components<Theme> = {

  MuiChip: {
    defaultProps: {
      deleteIcon: <CloseIcon />,
    },
    styleOverrides: {
      root: {
        borderRadius: 20,
      },
    },
    variants: [
      {
        props: {
          variant: 'square',
        },
        style: ({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          background: 'transparent',
          borderLeftWidth: '4px',
          borderLeftColor: theme.palette.primary.main,
          borderRadius: 0,
        })
      },
      {
        props: {
          variant: 'outlineOpacity',
        },
        style: ({ theme }) => ({
          colorPrimary : {
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: alpha(theme.palette.primary.main, 0.2)
          },
          colorSecondary : {
            border: `1px solid ${theme.palette.secondary.main}`,
            backgroundColor: alpha(theme.palette.secondary.main, 0.2)
          }
        })
      }
    ],
  },
};
