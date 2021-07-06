import SearchBar from './SearchBar';

const object = {
  title: 'components/organisms/SearchBar',
  component: SearchBar,
};

export default object;

const template = (args) => <SearchBar {...args} />;

export const Default = template.bind({});
Default.args = {};
