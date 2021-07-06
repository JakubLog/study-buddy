import { Button } from './Button';

const object = {
  title: 'components/atoms/Button',
  component: Button,
};

export default object;

const template = (args) => <Button {...args}>Read me</Button>;

export const Default = template.bind({});

export const Big = template.bind({});
Big.args = {
  isBig: true,
};
