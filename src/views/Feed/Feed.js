import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { StyledTitle, Wrapper, StyledSubTitle, Image } from './Feed.styles';

const Feed = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);
    (async () => {
      const {
        data: {
          data: { allArticles },
        },
      } = await axios.post(
        'https://graphql.datocms.com/',
        { query: `{allArticles(filter: {id:{eq: "${id}"}}) {id,title,category,feed,image{url}}}` },
        { headers: { Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}` } }
      );
      setArticle(allArticles[0]);
      setLoadingState(false);
    })();
  }, [id]);

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
