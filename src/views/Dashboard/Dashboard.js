import React, { useEffect } from 'react';
import UserList from 'components/organisms/UserList/UserList';
import { Redirect } from 'react-router';
import { ViewWrapper } from 'components/molecules/VievWrapper/ViewWrapper';
import { DashboardWrapper } from './Dashboard.styles';
import InfoBar from 'components/molecules/InfoBar/InfoBar';
import { useParams } from 'react-router';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';
import StudentInfo from 'components/molecules/StudentInfo/StudentInfo';
import { useEvents } from 'hooks/useEvents';
import { useGetGroupsQuery } from 'store';
import { Title } from 'components/atoms/Title/Title';
import { useGetStudentsQuery } from 'store';

const Dashboard = () => {
  const { id } = useParams();
  const { data: groups, isLoading: isLoadingGroups } = useGetGroupsQuery();
  const { data: students, isLoading: isLoadingStudents } = useGetStudentsQuery(id);
  const { openModalStudents, closeModal, isOpen, returnedData } = useModal();
  const { changeGroup } = useEvents();

  useEffect(() => {
    (() => {
      changeGroup(id);
    })();
    // eslint-disable-next-line
  }, [id]);

  if (isLoadingGroups || isLoadingStudents) {
    return <Title>Loading...</Title>;
  }

  if (!id && groups.groups.length > 0) return <Redirect to={`/group/${groups.groups[0].name}`} />;

  return (
    <DashboardWrapper>
      {isLoadingGroups || isLoadingStudents ? (
        <Title>Loading...</Title>
      ) : (
        <>
          {console.log(groups.groups)}
          <InfoBar activeGroup={id} groups={groups.groups} />
          <ViewWrapper>
            <UserList openModal={openModalStudents} group={id} users={students.students} />
          </ViewWrapper>
          {isOpen ? (
            <Modal closeModal={closeModal}>
              <StudentInfo data={returnedData} />
            </Modal>
          ) : null}
        </>
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
