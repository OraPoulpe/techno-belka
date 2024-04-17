import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

import styles from './NewGroupButton.module.scss';
import { Flex } from 'antd';
import { useRouter } from 'next/navigation';

const NewGroupButton = () => {
  const router = useRouter();
  return (
    <div
      className={styles.button__wrap}
      onClick={() => {
        router.push('/groups/new');
      }}
    >
      <Flex vertical gap={10} align="center">
        <PlusOutlined style={{ color: '#007C81', fontSize: '32px' }} />
        <span className={styles.span__text}>Добавить группу</span>
      </Flex>
    </div>
  );
};

export default NewGroupButton;
