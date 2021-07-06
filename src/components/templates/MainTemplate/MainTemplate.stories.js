import MainTemplate from './MainTemplate';

const object = {
  title: 'components/templates/MainTemplate',
  component: MainTemplate,
};

export default object;

const template = (args) => <MainTemplate {...args} />;

export const Default = template.bind({});
Default.args = {};
