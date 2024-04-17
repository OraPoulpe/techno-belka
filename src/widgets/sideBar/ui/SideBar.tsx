'use client';

import {
  LogoutOutlined,
  PlusOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Divider, Flex, Menu, ThemeConfig, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from './SideBar.module.scss';

import logo_school from '@/../public/assets/logo_school_800.svg';
import Image from 'next/image';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import Icon, {
  CustomIconComponentProps,
} from '@ant-design/icons/lib/components/Icon';
import TeacherSvg from '../../../../public/icons/TeacherSvg';
import TaskSvg from '../../../../public/icons/TaskSvg';
import AddStudentSvg from '../../../../public/icons/AddStudentSvg';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const TeacherIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={TeacherSvg} {...props} />
  );
  const TaskIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={TaskSvg} {...props} />
  );
  const AddStudentIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={AddStudentSvg} {...props} />
  );

  const menuItems = [
    {
      key: '1',
      icon: <TeacherIcon />,
      label: 'Группы',
      children: [
        {
          key: '2',
          icon: <PlusOutlined />,
          label: 'Новая группа',
          onClick: () => {
            router.push('/groups/new');
          },
        },
        {
          key: '3',
          label: 'Все группы',
          onClick: () => {
            router.push('/groups');
          },
        },
      ],
    },
    {
      key: '4',
      icon: <TaskIcon />,
      label: 'Задания',
      onClick: () => {
        router.push('/tasks');
      },
    },
    {
      key: '5',
      icon: <AddStudentIcon />,
      label: 'Добавить ученика',
      onClick: () => {
        router.push('/students/add');
      },
    },
  ];

  return (
    <Sider
      // collapsible
      // collapsed={collapsed}
      // onCollapse={(value) => setCollapsed(value)}
      style={{ height: '100vh', backgroundColor: '#D5F4F6' }}
      // className={styles.sider__wrap}
      width={250}
      theme="light"
    >
      <Image
        className={styles.school__logo}
        src={logo_school.src}
        width={145}
        height={36}
        alt="Школа 800"
      />
      <div className={styles.menu__wrap}>
        <Menu
          theme="light"
          // className={styles.menu__wrap}
          defaultSelectedKeys={['3']}
          mode="inline"
          items={menuItems}
        />
        <Menu
          theme="light"
          // className={styles.menu__wrap}
          mode="inline"
          items={[
            {
              key: '1',
              icon: <LogoutOutlined />,
              label: 'Выйти',
              onClick: () => {
                localStorage.clear()
                router.push('/login');
              },
            },
          ]}
        />
      </div>
    </Sider>
  );
};

const siderTheme: ThemeConfig = {};

export default SideBar;
