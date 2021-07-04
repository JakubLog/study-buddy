import React from 'react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { RenderWithProviders } from 'helpers/RenderWithProviders';
import NewsSection, { query } from './NewsSection';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Checks error drop', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    RenderWithProviders(<NewsSection />);
    await screen.findByText(/Something/);
  });

  it('Checks display article', async () => {
    mock
      .onPost('https://graphql.datocms.com/', { query })
      .reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'test', feed: 'test', image: null }] } });
    RenderWithProviders(<NewsSection />);
    await screen.findByText(/Test/);
  });

  it('Checks display loading information', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, { data: { allArticles: [] } });
    RenderWithProviders(<NewsSection />);
    await screen.findByText(/Loading.../);
  });
});
