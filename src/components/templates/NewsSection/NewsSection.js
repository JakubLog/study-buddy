import React from 'react';
import { NewsWrapper, NewsTitle } from './NewsSection.styles';
import NewsArticle from 'components/organisms/NewsArticle/NewsArticle';

const data = [
  {
    title: 'lorem ipsum',
    category: 'category',
    feed: 'lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet',
  },
  {
    title: 'lorem ipsum2',
    category: 'category',
    feed: 'lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet',
  },
  {
    title: 'lorem ipsum3',
    category: 'category',
    feed: 'lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'lorem ipsum4',
    category: 'category',
    feed: 'lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet lorem ipsum lorem ipsum sit dolor amet',
  },
];

const NewsSection = () => {
  return (
    <NewsWrapper>
      <NewsTitle>University news feed</NewsTitle>
      {data.map(({ title, category, feed, image = null }) => (
        <NewsArticle key={title} title={title} category={category} feed={feed} image={image} />
      ))}
    </NewsWrapper>
  );
};

export default NewsSection;
