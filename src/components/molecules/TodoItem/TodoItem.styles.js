import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';

export const ItemWrapper = styled.div`
  padding: 10px 0px;
  padding-right: 20px;
  position: relative;
`;

export const ItemTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const ItemContent = styled.div`
  text-align: justify;
  padding-right: 20px;
  max-width: 75%;
`;

export const ItemButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10px;
`;
