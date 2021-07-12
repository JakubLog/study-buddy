import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import { Title } from 'components/atoms/Title/Title';

export const NoteWrapper = styled.div`
  padding-left: 40px;
  position: relative;
  margin-bottom: 20px;
`;
export const NoteTitle = styled(Title)`
  margin: 0;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const NoteContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0;
  text-align: justify;
  line-height: 1.5;
`;
export const NoteButton = styled(IconButton)`
  position: absolute;
  top: 0;
  left: 5px;
`;
