import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px 30px;
`;
export const StyledTitle = styled(Title)`
  margin: 0;
`;
export const StyledSubTitle = styled(Title)`
  font-weight: 400;
  margin: 0;
  margin-top: 6px;
  letter-spacing: 1px;
  font-size: 18px;
`;
export const Image = styled.img`
  float: right;
`;
