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
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
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

export const HintWrapper = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  width: 350px;
  border-radius: 20px 0 0;
  box-shadow: 0 2px 15px -12px ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 50px;
  max-height: 250px;
  overflow-y: scroll;
  position: absolute;
  top: 20px;
  left: 700px;
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 0 20px 0 0;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 20px;
  }
`;

export const HintItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.lightPurple};
  transition: background 0.2s ease-in-out, color 0.3s ease-in-out;
  font-weight: 700;
  color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.white : theme.colors.text)};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.text : theme.colors.white)};

  &:first-child {
    border-top: 0;
  }
`;
