import { Components, Theme } from "@mui/material";

export const TableStyle: Components<Theme> = {
  MuiTableContainer: {
    styleOverrides: {
      root: {
        position: 'relative',
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: ({ theme }) => ({
       // border: `1px solid ${theme.palette.divider}`,
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: 'none',
      }),
      head: ({ theme }) => ({
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.neutral,
      }),
      stickyHeader: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
      }),
      paddingCheckbox: ({ theme }) => ({
        paddingLeft: theme.spacing(1),
      }),
    }
  },
  MuiTableBody: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiTableRow-root:nth-child(even):not(:hover)': {
          background: 'none',
        },
      }),
    }
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-selected': {
          backgroundColor: theme.palette.action.selected,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }),
    },
  },

  MuiTablePagination: {
    defaultProps: {
      backIconButtonProps: {
        size: 'small',
      },
      nextIconButtonProps: {
        size: 'small',
      },
      SelectProps: {
        MenuProps: {
          MenuListProps: {
            sx: {
              '& .MuiMenuItem-root': {
                // ...theme.typography.body2,
              },
            },
          },
        },
      },
    },

    styleOverrides: {
      root: ({ theme }) => ({
        borderTop: `solid 1px ${theme.palette.divider}`,
      }),
      toolbar: {
        // height: 64,
      },
      actions: ({ theme }) => ({
        marginRight: theme.spacing(1),
      }),
      select: ({ theme }) => ({
        '&:focus': {
          borderRadius: theme.shape.borderRadius,
        },
      }),
    },
  },

}

