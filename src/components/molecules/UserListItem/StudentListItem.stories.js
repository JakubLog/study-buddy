import StudentListItem from './StudentListItem';

const object = {
  title: 'components/molecules/StudentListItem',
  component: StudentListItem,
};

export default object;

const template = (args) => <StudentListItem {...args} />;

export const Default = template.bind({});
Default.args = {
  userData: {
    name: 'Story Book',
    average: '4.5',
    attendance: '87%',
  },
};
