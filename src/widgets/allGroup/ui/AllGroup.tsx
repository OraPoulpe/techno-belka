import { GroupCard } from '@/entities/groupCard';
import { useGetGroupsQuery } from '@/shared/api/groups';
import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import React from 'react';
import styles from './AllGroup.module.scss';
import { NewGroupButton } from '@/entities/group/newGroup';
import { Spin } from 'antd';

const AllGroup = () => {
  const { data: groups, isLoading } = useGetGroupsQuery();
  console.log('groups', groups);
  return (
    <section>
      <h2 className={styles.title__text}>Группы</h2>
      {isLoading && <Spin style={{margin: "30px"}}size="default" />}
      <div className={styles.allGroup__wrap}>
        {groups &&
          groups.map((item: IGroupInfo) => (
            <GroupCard groupInfo={item} key={item.id} />
          ))}
        <NewGroupButton />
      </div>
    </section>
  );
};

export default AllGroup;
