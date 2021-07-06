import InfoBar from './InfoBar';

const object = {
  title: 'components/molecules/InfoBar',
  component: InfoBar,
};

export default object;

const template = (args) => <InfoBar {...args} />;

export const Default = template.bind({});
Default.args = {
  activeGroup: 'A',
  groups: ['A', 'B', 'C'],
};
