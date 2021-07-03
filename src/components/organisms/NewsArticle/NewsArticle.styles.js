import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';

export const NewsArticleWrapper = styled(ViewWrapper)`
  margin: 0;
  width: 100%;
  border-radius: 12px;
`;

export const ArticleTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0;
`;

export const ArticleCategory = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0;
`;

const imageDecision = (image) => {
  if (image) {
    return `
    display:flex;
    justify-content: flex-start;
    img {
      width: 200px;
      object-fit: cover;
      margin-left: 100px;
      margin-right: 20px;
    }
    `;
  } else return null;
};

export const ArticleFeed = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.6;
  margin-top: 12px;
  margin-bottom: 30px;
  ${({ isImage }) => imageDecision(isImage)}
`;
