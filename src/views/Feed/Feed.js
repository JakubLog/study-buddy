import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { StyledTitle, Wrapper, StyledSubTitle, Image } from './Feed.styles';
import { Redirect } from 'react-router-dom';

const Feed = ({ isTest }) => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setLoadingState] = useState(true);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    setLoadingState(true);
    (async () => {
      try {
        const {
          data: {
            data: { allArticles },
          },
        } = await axios.post(
          'https://graphql.datocms.com/',
          { query: `{allArticles(filter: {id:{eq: "${id || isTest}"}}) {id,title,category,feed,image{url}}}` },
          { headers: { Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}` } }
        );
        setArticle(allArticles[0]);
        setLoadingState(false);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, [id, isTest]);

  if (!isTest && !id) return <Redirect to="/group/A" />;

  if (hasError || article === undefined) {
    return (
      <Wrapper>
        <StyledTitle>Sorry, something went wrong!</StyledTitle>
        <StyledSubTitle>We have a small problem. Check your url!</StyledSubTitle>
        <p>
          Looks like you are trying to broke something... but not with us! <br /> Please try again in a second.
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <StyledTitle>{article.title}</StyledTitle>
          <StyledSubTitle>{article.category}</StyledSubTitle>
          {article.image && <Image src={article.image.url} alt={article.title} />}
          <p>{article.feed}</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Feed;
