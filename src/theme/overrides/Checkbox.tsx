import { Theme } from '@mui/material/styles';
import { CheckboxProps, Components } from '@mui/material';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';

export const CheckboxStyle: Components<Theme> = {

  MuiCheckbox: {
    defaultProps: {
      icon: <CheckBoxOutlineBlankRoundedIcon />,
      checkedIcon: <CheckBoxRoundedIcon />,
      indeterminateIcon: <IndeterminateCheckBoxRoundedIcon />,
    },

    styleOverrides: {
      // root: ({ ownerState ,theme}: { ownerState: CheckboxProps }) => ({
      root: ({ ownerState, theme }) => ({
        padding: theme.spacing(1),
        ...(ownerState.size === 'small' && {
          '& svg': { width: 20, height: 20 },
        }),
        ...(ownerState.size === 'medium' && {
          '& svg': { width: 24, height: 24 },
        }),
      }),
    },
  },

}
