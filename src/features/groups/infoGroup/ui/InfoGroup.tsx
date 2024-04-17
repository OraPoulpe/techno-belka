import { IGroupInfo } from '@/shared/interfaces/groups.interfaces';
import { DingtalkOutlined } from '@ant-design/icons';
import { Avatar, Flex, Typography } from 'antd';
import React, { FC } from 'react';

import styles from './InfoGroup.module.scss';
import Paragraph from 'antd/es/skeleton/Paragraph';

const InfoGroup: FC<{ groupInfo: IGroupInfo }> = ({ groupInfo }) => {
  return (
    <Flex vertical gap={26}>
      <Flex gap={15} align="center">
        <Avatar
          shape="square"
          size={48}
          src={groupInfo.image?.url}
          icon={<DingtalkOutlined />}
        />
        <Typography.Title
          editable={{
            tooltip: 'Нажмите чтоб изменить название',
            enterIcon: null,
          }}
          level={3}
          style={{ margin: 0 }}
        >
          {groupInfo.name}
        </Typography.Title>
      </Flex>
      <Typography.Paragraph
      style={{fontSize:18}}
        editable={{
          tooltip: 'Нажмите чтоб изменить описание',
          enterIcon: null,
        }}
      >
        {groupInfo.description}
      </Typography.Paragraph>
    </Flex>
  );
};

export default InfoGroup;
