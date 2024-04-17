import { useGetHomelessQuery } from '@/shared/api/groups/getHomelessApi';
import { IUser } from '@/shared/interfaces/user.interfaces';
import { Modal, Table, TableProps } from 'antd';
import React, { FC } from 'react';
import styles from './AddUserToGrouModal.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import { usePatchUserMutation } from '@/shared/api/user';

const AddUserToGroupModal: FC<{id: number}> = ({id}) => {
  const { data: homelessUsers, isLoading } = useGetHomelessQuery();
  const [patchUsers] = usePatchUserMutation()

  const addUser = (idUser : number) => {
    const newInfo = {houseId: id}
    patchUsers({idUser, newInfo})

  }

  const columns: TableProps<IUser>['columns'] = [
    {
      title: '',
      dataIndex: 'plus',
      key: 'plus',
      align: 'center',
      render: (value: number, row: IUser) => (
        <span>
          <PlusOutlined className={styles.delete__icon} onClick={()=> addUser(row.id)}/>
        </span>
      ),
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
  ];
  return (
    <div className={styles.modal__content}>
      <Table
        style={{ overflowY: 'scroll', height: '100%' }}
        dataSource={homelessUsers}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default AddUserToGroupModal;
