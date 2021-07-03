import styled from 'styled-components';
import { NewsArticleWrapper } from 'components/organisms/NewsArticle/NewsArticle.styles';

export const NewsWrapper = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.darkGrey};
  grid-row: 1/3;
  grid-column: 3/3;
  display: flex;
  flex-direction: column;
  padding: 30px 45px;
  overflow-y: scroll;

  ${NewsArticleWrapper} {
    margin-bottom: 45px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const NewsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
