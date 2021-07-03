import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${Input} {
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StatusInfo = styled.div`
  margin-left: 35px;
  margin-right: 45px;
  p {
    margin: 5px 0;
  }
  strong {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
