import { useGetStudentsGroupByIdQuery } from '@/shared/api/groups/getStudentsGroupApi';
import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import { IUser, IUserPatch } from '@/shared/interfaces/user.interfaces';
import IconFlash from '@/shared/ui/IconFlash';
import { DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, Table, TableProps } from 'antd';
import React, { FC } from 'react';
import styles from './RatingStudents.module.scss';
import { useRemoveUserMutation } from '@/shared/api/groups';

const RatingStudents: FC<{ groupInfo: IGroupInfo }> = ({ groupInfo }) => {
  const { data: students, isLoading: isLoadingGetUsers } =
    useGetStudentsGroupByIdQuery(groupInfo.id);
  console.log('rating students', students);

  const [removeUser] = useRemoveUserMutation();

  const handleDeleteUser = (id: number) => {
    console.log('delete user with id', id);
    removeUser(id);
  };

  const columns: TableProps<IUser>['columns'] = [
    {
      title: 'Место',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    },
    {
      title: 'ФИО',
      dataIndex: 'fullname',
      key: 'fullname',
      align: 'center',
      render: (value: number, row: IUser) => (
        <span>{`${row.surname} ${row.firstname} ${row.lastname}`}</span>
      ),
    },
    {
      title: 'Класс',
      dataIndex: 'class',
      key: 'class',
      align: 'center',
    },
    {
      title: 'Количество баллов',
      dataIndex: 'points',
      key: 'points',
      align: 'center',
      render: (value: number, row: IUser) => (
        <span>
          {value} <IconFlash />
        </span>
      ),
    },
    {
      title: '',
      dataIndex: 'delete',
      key: 'delete',
      align: 'center',
      render: (value: number, row: IUser) => (
        <span>
          <Popconfirm
            placement="top"
            title={'Удалить участника'}
            description={'Вы уверены, что хотите удалить участника?'}
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleDeleteUser(row.id)}
          >
            <DeleteOutlined className={styles.delete__icon} />
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={students} columns={columns} pagination={false} />;
    </div>
  );
};

export default RatingStudents;
