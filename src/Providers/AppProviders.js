import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import EventsProvider from 'hooks/useEvents';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ErrorProvider>
        <AuthProvider>
          <EventsProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </EventsProvider>
        </AuthProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
