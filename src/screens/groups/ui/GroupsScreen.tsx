import { AllGroup } from '@/widgets/allGroup';
import { RatingGroup } from '@/widgets/ratingGroup';
import { Flex } from 'antd';
import React from 'react';

const GroupsScreen = () => {
  return (
    <Flex vertical gap={40}>
      <AllGroup />
      <RatingGroup />
    </Flex>
  );
};

export default GroupsScreen;
