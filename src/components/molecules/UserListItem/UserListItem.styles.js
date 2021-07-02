import styled from 'styled-components';

export const StyledListItem = styled.li`
  padding: 25px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #dfe2e8;
  }
  Person {
    padding-right: 15px;
  }
  Button {
    margin-top: -20px;
    margin-left: 20px;
  }
`;
