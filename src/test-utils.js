import React from 'react';
import { render } from '@testing-library/react';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
