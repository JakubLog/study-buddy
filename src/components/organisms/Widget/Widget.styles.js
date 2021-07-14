import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const WidgetWrapper = styled.div`
  position: absolute;
  top: 100px;
  width: 500px;
  height: 700px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.text};
  border-right: 0;
  transform: ${({ isExpanded }) => (isExpanded ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease-in-out;
`;

export const WidgetButton = styled(Button)`
  transform: rotate(-90deg);
  position: absolute;
  left: -76px;
  top: 31px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px 5px 0 0;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
  }
`;

export const NotesWrapper = styled.div`
  overflow-y: auto;
  padding: 20px 40px;
`;

export const ElementsWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 50% 50%;
`;

export const TodoWrapper = styled.div`
  height: 100%;
  border-top: 3px solid ${({ theme }) => theme.colors.text};
  overflow-y: auto;
  padding: 20px 40px;
  & > div {
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border: 0;
    }
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }
`;
