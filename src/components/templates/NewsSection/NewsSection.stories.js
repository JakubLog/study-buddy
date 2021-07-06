import NewsSection from './NewsSection';

const object = {
  title: 'components/templates/NewsSection',
  component: NewsSection,
};

export default object;

const template = (args) => <NewsSection {...args} />;

export const Default = template.bind({});
Default.args = {};
