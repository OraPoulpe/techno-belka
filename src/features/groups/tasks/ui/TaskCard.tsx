import { Flex } from 'antd';
import React, { FC } from 'react';

const TaskCard: FC<{ id: number }> = ({ id }) => {
  return (
    <Flex vertical gap={8}>
      <h3>Организация школьного спектакля</h3>
      <span>12.04 - 26.04</span>
      <span>Школьный уровень</span>
    </Flex>
  );
};

export default TaskCard;
