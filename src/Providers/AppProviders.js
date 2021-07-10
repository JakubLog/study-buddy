import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ErrorProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
