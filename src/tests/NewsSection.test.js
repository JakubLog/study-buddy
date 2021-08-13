import React from 'react';
import { render, screen } from 'test-utils';
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, { query } from '../components/templates/NewsSection/NewsSection';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Checks error drop', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    render(<NewsSection />);
    await screen.findByText(/Something/);
  });

  it('Checks display article', async () => {
    mock
      .onPost('https://graphql.datocms.com/', { query })
      .reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'test', feed: 'test', image: null }] } });
    render(<NewsSection />);
    await screen.findByText(/Test/);
  });

  it('Checks display loading information', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, { data: { allArticles: [] } });
    render(<NewsSection />);
    await screen.findByText(/Loading.../);
  });
});
