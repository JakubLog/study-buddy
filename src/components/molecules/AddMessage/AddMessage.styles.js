import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const Wrapper = styled.div`
  * {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const StyledTitle = styled(Title)`
  margin: 0;
`;
