import { render, screen } from 'test-utils';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Feed from 'views/Feed/Feed';

const mock = new MockAdapter(axios);

describe('Feed tests', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when bad request', async () => {
    mock.onPost('https://graphql.datocms.com/', { query: `{allArticles(filter: {id:{eq: "321"}}) {id,title,category,feed,image{url}}}` }).reply(500);
    render(<Feed isTest />);
    await screen.findByText('Sorry, something went wrong!');
  });
});
