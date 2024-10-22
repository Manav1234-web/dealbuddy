import { useMemo, ReactNode } from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
// import { merge } from 'lodash';
import { ButtonStyle } from './overrides/Buttons';
import { CardStyle } from './overrides/Card';
import { TypographyStyle } from './overrides/Typography';
import { AvatarStyle } from './overrides/Avatar';
import { DialogStyle } from './overrides/Dialog';
import { TableStyle } from './overrides/Table';
import { PaperStyle } from './overrides/Paper';
import { ContainerStyle } from './overrides/Container';
import { CheckboxStyle } from './overrides/Checkbox';
import { ToolbarStyle } from './overrides/Toolbar';
import { TextFieldStyle } from "./overrides/TextField";
import { TabsStyle } from './overrides/Tabs';
import { AccordionStyle } from './overrides/Accordion';
import { FormLabelStyle } from './overrides/FormLabel';
import { ChipStyle } from './overrides/Chip';
import shadows from '@mui/material/styles/shadows';
import { IconButtonStyle } from './overrides/IconButton';
import { Input } from "./overrides/Input";
import React from 'react';
import { palette } from './palette';
import typography from './typography';
import { LinkStyle } from './overrides/Link';
import { merge } from 'lodash';
import { Padding } from '@mui/icons-material';
import breakpoints from './breakpoints';
import CommonButton from '../component/CommonButton';
// import palette from './palette';

type ThemeConfigProps = {
  children?: ReactNode;
  themeOptions?: ThemeOptions;
};

// Set default shadow
shadows[1] = '0px 3px 16px #00000029';

// Font
const FONT_PRIMARY = 'Montserrat'; // Google Font


export const defaultThemeOptions = {
  palette,
  shadows: shadows,
  breakpoints,
  typography,
  components: {
    ...ButtonStyle,
    ...IconButtonStyle,
    ...CardStyle,
    ...ChipStyle,
    ...TypographyStyle,
    ...TextFieldStyle,
    ...AvatarStyle,
    ...DialogStyle,
    ...TableStyle,
    ...PaperStyle,
    ...ContainerStyle,
    ...ToolbarStyle,
    ...TabsStyle,
    ...AccordionStyle,
    ...FormLabelStyle,
    ...LinkStyle,
    ...Input,
    ...CheckboxStyle,
    ...CommonButton,
  },
}

export function ThemeConfig({ children, themeOptions }: ThemeConfigProps) {
  
  const options: ThemeOptions = useMemo(
    () =>
      merge(
        defaultThemeOptions,
        themeOptions
      ),
    [themeOptions]
  );
  const theme = createTheme(options);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            '*': {
              boxSizing: 'border-box',
            },
            html: {
              margin: 0,
              padding: 0,
              width: '100%',
              height: '100%',
              WebkitOverflowScrolling: 'touch',
            },
            body: {
              margin: 0,
              padding: 0,
              width: '100%',
              height: '100%',
            },
            '#root': {
              width: '100%',
              height: '100%',
            },
            input: {
              '&[type=number]': {
                MozAppearance: 'textfield',
                '&::-webkit-outer-spin-button': {
                  margin: 0,
                  WebkitAppearance: 'none',
                },
                '&::-webkit-inner-spin-button': {
                  margin: 0,
                  WebkitAppearance: 'none',
                },
              },
            },
            img: {
              display: 'block',
              maxWidth: '100%',
            },
            a: {
              textDecoration: 'none'
            },
            ul: {
              margin: 0,
              padding: 0,
            },
          }}
        />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}