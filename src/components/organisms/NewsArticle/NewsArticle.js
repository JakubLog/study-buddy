import React from 'react';
import PropTypes from 'prop-types';
import { NewsArticleWrapper, ArticleTitle, ArticleCategory, ArticleFeed } from './NewsArticle.styles';
import { Button } from 'components/atoms/Button/Button';
import { useHistory } from 'react-router';

const NewsArticle = ({ id, title, category, feed, image }) => {
  const history = useHistory();

  return (
    <NewsArticleWrapper>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleCategory>{category}</ArticleCategory>
      <ArticleFeed isImage={image ? true : false}>
        {feed}
        {image ? <img src={image.url} alt="article" /> : null}
      </ArticleFeed>

      <Button isBig onClick={() => history.push(`/feed/${id}`)}>
        Read more
      </Button>
    </NewsArticleWrapper>
  );
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  feed: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default NewsArticle;
