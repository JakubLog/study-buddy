import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const WidgetWrapper = styled.div`
  position: absolute;
  top: 100px;
  width: 500px;
  min-height: 150px;
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
  left: -83px;
  top: 40px;
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
  max-height: 600px;
  overflow-y: auto;
  padding: 20px 40px;
`;
