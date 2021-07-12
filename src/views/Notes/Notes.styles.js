import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import styled from 'styled-components';

export const NotesWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-template-rows: 80px 1fr;
`;
export const StyledTitle = styled(Title)`
  display: flex;
  align-items: center;
  grid-column: 1/3;
  grid-row: 1/2;
`;
export const NotesForm = styled(ViewWrapper)`
  grid-row: 2/3;
  width: 100%;
  input,
  textarea {
    margin-bottom: 20px;
  }
`;
export const NotesContent = styled.div`
  grid-row: 2/3;
  padding: 0 20px;
  overflow-y: auto;
`;
