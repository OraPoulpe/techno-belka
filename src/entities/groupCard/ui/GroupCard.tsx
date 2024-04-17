import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import { DingtalkOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import React, { FC } from 'react';

import styles from './CroupCard.module.scss';
import { useRouter } from 'next/navigation';

const GroupCard: FC<{ groupInfo: IGroupInfo }> = ({ groupInfo }) => {
  const router = useRouter();
  return (
    <div
      className={styles.card__wrap}
      onClick={() => {
        router.push(`/groups/${groupInfo.id}`);
      }}
    >
      <div className={styles.info__wrap}>
        <Flex gap={8} align="center">
          <Avatar
            shape="square"
            size={32}
            src={groupInfo.image?.url}
            icon={<DingtalkOutlined />}
          />
          <h2 className={styles.name_text}>{groupInfo.name}</h2>
        </Flex>
        <div className={styles.countStudent__wrap}>
          {groupInfo.usersCount} учеников
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
