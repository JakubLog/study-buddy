import Person from './Person';

const object = {
  title: 'components/atoms/Person',
  component: Person,
  argTypes: {
    name: {
      control: { type: 'text' },
    },
    attendance: {
      control: { type: 'text' },
    },
  },
};

export default object;

const template = (args) => <Person {...args} />;

export const Default = template.bind({});
Default.args = {
  name: 'Storybook',
  attendance: '100%',
};
