import Navigation from './Navigation';

const object = {
  title: 'components/organisms/Navigation',
  component: Navigation,
};

export default object;

const template = (args) => <Navigation {...args} />;

export const Default = template.bind({});
Default.args = {};
