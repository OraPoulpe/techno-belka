import { InfoGroup } from '@/features/groups/infoGroup';
import RatingStudents from '@/features/groups/ratingStudents/ui/RatingStudents';
import { TaskCard } from '@/features/groups/tasks';
import { useGetGroupByIdQuery } from '@/shared/api/groups';
import { Button, Flex, Modal, Spin } from 'antd';
import React, { FC, useState } from 'react';

import styles from './GroupView.module.scss';
import { AddUserToGroupModal } from '@/features/users/addUserToGroup';

const GroupView: FC<{ id: number }> = ({ id }) => {
  const { data: groupInfo, isLoading } = useGetGroupByIdQuery(id);
  console.log('one group info', groupInfo);

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <section>
      <Modal
        title="Добавить ученика"
        open={openModal}

        onCancel={()=> setOpenModal(false)}
        onOk={()=> setOpenModal(false)}

      >
        <AddUserToGroupModal id={id}/>
      </Modal>
      {isLoading && <Spin style={{ margin: '30px' }} size="default" />}
      {!!groupInfo && (
        <Flex vertical gap={20}>
          <InfoGroup groupInfo={groupInfo} />
          {/* <TaskCard id={groupInfo.id}/> */}
          <Flex gap={36}>
            <h3 className={styles.title__text}>Рейтинг</h3>
            <Button type="primary" size="middle" onClick={()=>setOpenModal(true)}>
              Добавить участника
            </Button>
          </Flex>
          <RatingStudents groupInfo={groupInfo} />
        </Flex>
      )}
    </section>
  );
};

export default GroupView;
