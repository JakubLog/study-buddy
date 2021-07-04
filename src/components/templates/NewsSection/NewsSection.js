import React, { useState, useEffect } from 'react';
import { NewsWrapper, NewsTitle } from './NewsSection.styles';
import NewsArticle from 'components/organisms/NewsArticle/NewsArticle';
import axios from 'axios';

export const query = `{
  allArticles {
    id
    title,
    category,
    feed,
    image {
      url
    }
  }
}`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(
        ({
          data: {
            data: { allArticles },
          },
        }) => setArticles(allArticles)
      )
      .catch(() => setError('Upsss! Something went wrong!'));
  }, []);

  return (
    <NewsWrapper>
      <NewsTitle>University news feed</NewsTitle>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, feed, image = null }) => (
          <NewsArticle key={id} title={title} category={category} feed={feed} image={image} />
        ))
      ) : (
        <NewsTitle>{error ? error : 'Loading...'}</NewsTitle>
      )}
    </NewsWrapper>
  );
};

export default NewsSection;
