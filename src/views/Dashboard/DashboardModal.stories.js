import Modal from 'components/organisms/Modal/Modal';
import StudentInfo from 'components/molecules/StudentInfo/StudentInfo';

const object = {
  title: 'components/molecules/DashboardModal',
  component: Modal,
};

export default object;

const template = (args) => (
  <Modal>
    <StudentInfo {...args} />
  </Modal>
);

export const Default = template.bind({});
Default.args = {
  data: {
    id: '5',
    name: 'Paweł Andrzejewski',
    attendance: '29%',
    average: '2.4',
    group: 'A',
  },
};
