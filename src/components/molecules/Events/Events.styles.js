import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const EventsWrapper = styled.div`
  height: 450px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 20px;
  }
`;
export const EventItem = styled.div`
  width: 90%;
  padding: 20px 10px;
  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;
export const EventTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0;
`;
export const EventContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 12px;
`;
