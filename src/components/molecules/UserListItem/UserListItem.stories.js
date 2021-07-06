import UserListItem from './UserListItem';

const object = {
  title: 'components/molecules/UserListItem',
  component: UserListItem,
};

export default object;

const template = (args) => <UserListItem {...args} />;

export const Default = template.bind({});
Default.args = {
  userData: {
    name: 'Story Book',
    average: '4.5',
    attendance: '87%',
  },
};
