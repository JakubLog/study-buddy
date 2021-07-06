import { Label } from './Label';

const object = {
  title: 'components/atoms/Label',
  component: Label,
};

export default object;

const template = (args) => <Label {...args}>Label</Label>;

export const Default = template.bind({});
