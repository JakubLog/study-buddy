import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorProvider } from 'hooks/useError';
import EventsProvider from 'hooks/useEvents';
import { store } from 'store/index';
import { Provider } from 'react-redux';

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorProvider>
          <EventsProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </EventsProvider>
        </ErrorProvider>
      </Router>
    </Provider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
