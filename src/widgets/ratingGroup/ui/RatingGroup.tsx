import React from 'react';

import styles from './RatingGroup.module.scss';
import { Spin, Table, TableProps } from 'antd';
import { useGetGroupsQuery } from '@/shared/api/groups';
import IconFlash from '@/shared/ui/IconFlash';
import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';

const RatingGroup = () => {
  const { data: groups, isLoading } = useGetGroupsQuery();

  const columns: TableProps<IGroupInfo>['columns'] = [
    {
      title: 'Место',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'Название группы',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Количество баллов',
      dataIndex: 'totalPoints',
      key: 'totalPoints',
      align: 'center',
      render: (value: number, row: IGroupInfo) => (
        <span>
          {value} <IconFlash />
        </span>
      ),
    },
  ];

  return (
    <section>
      <h3 className={styles.title__text}>Рейтинг групп</h3>
      {isLoading && <Spin style={{ margin: '30px' }} size="default" />}
      <Table dataSource={groups} columns={columns} pagination={false} />;
    </section>
  );
};

export default RatingGroup;
