import { Title } from './Title';

const object = {
  title: 'components/atoms/Title',
  component: Title,
};

export default object;

const template = (args) => <Title {...args}>This is title</Title>;

export const Default = template.bind({});
