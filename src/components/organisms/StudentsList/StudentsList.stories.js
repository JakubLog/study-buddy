import UserList from './StudentsList';

const object = {
  title: 'components/organisms/UserList',
  component: UserList,
};

export default object;

const template = (args) => <UserList {...args} />;

export const Default = template.bind({});
Default.args = {
  users: [
    {
      id: '1',
      name: 'Adam Romański',
      attendance: '39%',
      average: '2.3',
    },
    {
      id: '2',
      name: 'Krzysztof Batko',
      attendance: '23%',
      average: '3.3',
    },
    {
      id: '3',
      name: 'Patrycja Gonciarz',
      attendance: '45%',
      average: '4.3',
    },
    {
      id: '4',
      name: 'Olga Hahn',
      attendance: '56%',
      average: '4.1',
    },
    {
      id: '5',
      name: 'Paweł Andrzejewski',
      attendance: '29%',
      average: '2.4',
    },
  ],
};
