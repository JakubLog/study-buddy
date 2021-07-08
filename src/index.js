import React from 'react';
import ReactDOM from 'react-dom';
import App from 'views/App';
import { worker } from 'mocks/browser';
import AppProviders from 'Providers/AppProviders';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.querySelector('#app')
  );
});
