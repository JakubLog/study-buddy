import React from 'react';
import { NewsArticleWrapper, ArticleTitle, ArticleCategory, ArticleFeed } from './NewsArticle.styles';
import { Button } from 'components/atoms/Button/Button';

const NewsArticle = ({ title, category, feed, image }) => {
  return (
    <NewsArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleCategory>{category}</ArticleCategory>
      <ArticleFeed isImage={image ? true : false}>
        {feed}
        {image ? <img src={image.url} alt="article" /> : null}
      </ArticleFeed>

      <Button isBig>Read more</Button>
    </NewsArticleWrapper>
  );
};

export default NewsArticle;
