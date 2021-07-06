import styled from 'styled-components';

const checkAverage = (number = 0, obj) => {
  if (number > 4) return obj.colors.success;
  else if (number < 4 && number > 2.5) return obj.colors.warning;
  else return obj.colors.error;
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const StyledAverage = styled.div`
  width: ${({ isBig }) => (isBig ? '50px' : '35px')};
  height: ${({ isBig }) => (isBig ? '50px' : '35px')};
  display: flex;
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.l : theme.fontSize.s)};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  align-items: center;
  justify-content: center;
  background-color: ${({ average, theme: obj }) => checkAverage(average, obj)};
  border-radius: 50%;
`;
