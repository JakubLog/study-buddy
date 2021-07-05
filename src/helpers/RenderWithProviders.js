import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import UserProvider from 'Providers/UserContext';
import { render } from '@testing-library/react';

export const RenderWithProviders = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
