import React, { useEffect, useState } from 'react';
import UserList from 'components/organisms/UserList/UserList';
import { Redirect } from 'react-router';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import { DashboardWrapper } from './Dashboard.styles';
import InfoBar from 'components/molecules/InfoBar/InfoBar';
import { useParams } from 'react-router';
import useDashboard from 'hooks/useDashboard';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';
import StudentInfo from 'components/molecules/StudentInfo/StudentInfo';

const Dashboard = () => {
  const { id } = useParams();
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const { getGroups, getStudents } = useDashboard();
  const { openModal, closeModal, isOpen, returnedData } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
    (async () => {
      const users = await getStudents(id, groups);
      setUsers(users);
    })();
    // eslint-disable-next-line
  }, [id]);

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <DashboardWrapper>
      <InfoBar activeGroup={id} groups={groups} />
      <ViewWrapper>
        <UserList openModal={openModal} users={users} />
      </ViewWrapper>
      {isOpen ? (
        <Modal closeModal={closeModal}>
          <StudentInfo data={returnedData} />
        </Modal>
      ) : null}
    </DashboardWrapper>
  );
};

export default Dashboard;
