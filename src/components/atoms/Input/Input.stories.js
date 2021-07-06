import { Input } from './Input';

const object = {
  title: 'components/atoms/Input',
  component: Input,
};

export default object;

const template = (args) => <Input {...args} />;

export const Default = template.bind({});
