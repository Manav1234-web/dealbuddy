import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface Palette {
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    chart: ChartPaletteOptions;
  }
}

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  main: "#919EAB",
};

const SECONDARY = {
  lighter: "#f3bac5",
  light: "#e35e78",
  main: "#d7193e",
  dark: "#cd1230",
  darker: "#43DF9A",
  contrastText: "#fff",
  50: "#fae3e8",
  100: "#f3bac5",
  200: "#eb8c9f",
  300: "#e35e78",
  400: "#dd3c5b",
  500: "#d7193e",
  600: "#d31638",
  700: "#cd1230",
  800: "#c70e28",
  900: "#be081b",
  A100: "#ffe8ea",
  A200: "#ffb5ba",
  A400: "#ff828b",
  A700: "#ff6973",
};

const PRIMARY = {
  lighter: "#c2c1df",
  light: "#706eb4",
  main: "#00c86d",
  dark: '#262481',
  darker: '#43df9a0d;',
  contrastText: "#ffffff",
  50: "#e6e6f2",
  100: "#c2c1df",
  200: "#9998ca",
  300: "#706eb4",
  400: "#514fa4",
  500: "#309868",
  600: "#2d2b8c",
  700: "#262481",
  800: "#1f1e77",
  900: "#131365",
  A100: "#9c9cff",
  A200: "#43df9a",
  A400: "#3636ff",
  A700: "#1d1dff",
  A800: "#00c86d",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  chart: CHART_COLORS,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export const palette = {
  ...COMMON,
  text: {
    primary: "#160D0C",
    secondary: GREY[700],
    disabled: GREY[500],
    success: SUCCESS.main,
    warning: WARNING.main,
    error: ERROR.main,
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: GREY[200],
  },
};

// export default function palette(themeMode: 'light' | 'dark') {
//   const light = {
//     ...COMMON,
//     mode: 'light',
//     text: {
//       primary: GREY[800],
//       secondary: GREY[600],
//       disabled: GREY[500],
//     },
//     background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
//     action: {
//       ...COMMON.action,
//       active: GREY[600],
//     },
//   } as const;

//   const dark = {
//     ...COMMON,
//     mode: 'dark',
//     text: {
//       primary: '#fff',
//       secondary: GREY[500],
//       disabled: GREY[600],
//     },
//     background: {
//       paper: GREY[800],
//       default: GREY[900],
//       neutral: alpha(GREY[500], 0.16),
//     },
//     action: {
//       ...COMMON.action,
//       active: GREY[500],
//     },
//   } as const;

//   return themeMode === 'light' ? light : dark;
// }
