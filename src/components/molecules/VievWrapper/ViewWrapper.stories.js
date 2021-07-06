import { ViewWrapper } from './ViewWrapper';

const object = {
  title: 'components/molecules/ViewWrapper',
  component: ViewWrapper,
};

export default object;

const template = (args) => <ViewWrapper {...args} />;

export const Default = template.bind({});
Default.args = {};
