import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import styled from 'styled-components';

export const TodoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-template-rows: 80px 88%;
`;
export const StyledTitle = styled(Title)`
  display: flex;
  align-items: center;
  grid-column: 1/3;
  grid-row: 1/2;
`;
export const TodoForm = styled(ViewWrapper)`
  grid-row: 2/3;
  width: 100%;
  input,
  textarea {
    margin-bottom: 20px;
  }
`;
export const TodoContent = styled.div`
  grid-row: 2/3;
  padding: 0 50px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
`;

export const TodoActive = styled.div`
  color: ${({ theme }) => theme.colors.success};
  ${StyledTitle} {
    padding-bottom: 10px;
  }
`;

export const TodoUnactive = styled.div`
  color: ${({ theme }) => theme.colors.error};
  ${StyledTitle} {
    padding-bottom: 10px;
  }
`;

export const TodoItemsWrapper = styled.div`
  height: 80%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    border-radius: 15px;
  }
`;
