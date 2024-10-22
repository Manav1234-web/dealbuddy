import { alpha, Components, Theme } from '@mui/material';
import { palette } from '../palette';

export const DialogStyle: Components<Theme> = {
  MuiDialog: {
    defaultProps: {
      maxWidth: 'sm',
      fullWidth: true,
    },
    styleOverrides: {
      paper: ({ theme }) => ({
        boxShadow: `-40px 40px 80px -8px ${alpha(theme.palette.grey[500], 0.24)}`,
        '&.MuiPaper-rounded': {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
        '&.MuiDialog-paperFullScreen': {
          borderRadius: 0,
        },
        '&.MuiDialog-paper .MuiDialogActions-root': {
          padding: theme.spacing(3),
        },
        '@media (max-width: 600px)': {
          margin: theme.spacing(2),
        },
        '@media (max-width: 663.95px)': {
          '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
            maxWidth: '100%',
          },
        },
      }),
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(2),
      }),
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(2, 3),
      }),
      dividers: ({ theme }) => ({
        borderTop: 0,
        borderBottomStyle: 'dashed',
        paddingBottom: theme.spacing(3),
      }),
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& > :not(:first-of-type)': {
          marginLeft: theme.spacing(1.5),
        },
      }),
    },
  },
  // MuiDialogTitle: {
  //   defaultProps: {
  //     sx: (theme) => ({
  //       fontSize: 20,
  //     }),
  //   },
  //   styleOverrides: {
  //     root: {},
  //   },
  // },
  // MuiDialogContent: {
  //   styleOverrides: {
  //     root: {},
  //   },
  // },
  // MuiDialogActions: {
  //   styleOverrides: {
  //     root: ({ theme }) => ({
  //       paddingLeft: theme.spacing(3),
  //       paddingRight: theme.spacing(3),
  //       paddingBottom: theme.spacing(2),
  //     }),
  //   },
  // },
  // MuiBackdrop: {
  //   styleOverrides: {
  //     root: {
  //       //  backgroundColor: alpha(palette.blue.main, 0.7),
  //     },
  //   },
  // },
};
