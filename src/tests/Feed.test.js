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
    mock.onPost('https://graphql.datocms.com/', { query: `{allArticles(filter: {id:{eq: "132"}}) {id,title,category,feed,image{url}}}` }).reply(500);
    render(<Feed isTest={'132'} />);
    expect(await screen.findByText('Sorry, something went wrong!')).toBeInTheDocument();
  });
  it('Displays data when valid request', async () => {
    mock
      .onPost('https://graphql.datocms.com/', { query: `{allArticles(filter: {id:{eq: "46191177"}}) {id,title,category,feed,image{url}}}` })
      .reply(200, { data: { allArticles: [{ id: '46191177', title: 'Test title', category: 'test', feed: 'test', image: null }] } });
    render(<Feed isTest={'46191177'} />);
    await screen.findAllByText('test');
    expect(await screen.findByText('Test title')).toBeInTheDocument();
  });
});
