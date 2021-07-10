import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const object = {
  title: 'components/molecules/ErrorMessage',
  component: ErrorMessage,
};

export default object;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden !important;
`;

const template = (args) => (
  <Wrapper>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = template.bind({});
Default.args = {
  message: 'Something went wrong. Please try again, or contact our support.',
};
