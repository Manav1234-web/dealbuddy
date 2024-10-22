import { Components, TabProps, Theme } from '@mui/material';

export const TabsStyle: Components<Theme> = {
  MuiTabs: {
    defaultProps: {
      textColor: 'inherit',
      allowScrollButtonsMobile: true,
      variant: 'scrollable',
    },
    styleOverrides: {
      root: ({ }) => ({
        scrollButtons: {
          width: 48,
          borderRadius: '50%',
        },
      }),
    },
  },
  MuiTab: {
    defaultProps: { 
      disableRipple: true,
      iconPosition: 'start',
    },
    styleOverrides: {
      // root: ({ ownerState, theme }) => ({
      //   padding: 0,
      //   opacity: 1,
      //   minWidth: 48,
      //   fontWeight: theme.typography.fontWeightMedium,
      //   '&:not(:last-of-type)': {
      //     marginRight: theme.spacing(3),
      //     [theme.breakpoints.up('sm')]: {
      //       marginRight: theme.spacing(5),
      //     },
      //   },
      //   '&:not(.Mui-selected)': {
      //     color: theme.palette.text.secondary,
      //   },
      //   ...((ownerState.iconPosition === 'start' || ownerState.iconPosition === 'end') && {
      //     minHeight: 48,
      //   }),
      // }),
    },
  },

  MuiTabPanel: {
    styleOverrides: {
      root: {
        paddingLeft: 0,
        paddingRight: 0,
      }
    }
  }

} as any;
