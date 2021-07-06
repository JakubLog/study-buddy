import IconButton from './IconButton';

const object = {
  title: 'components/atoms/IconButton',
  component: IconButton,
  argTypes: {
    type: {
      options: ['DELETE', 'MESSAGE', 'OPINION'],
      control: { type: 'radio' },
    },
  },
};

export default object;

const template = (args) => <IconButton {...args} />;

export const Default = template.bind({});
