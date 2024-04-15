import { Button, Form, Input, message } from 'antd';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useLoginUserMutation } from '../api/loginApi';
import { ILoginData } from '@/shared/interfaces/login.interface';
import type { FormProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const [isButtonDisable, setButtonDisable] = useState<boolean>(false);

  const ErrorMassage = () => {
    messageApi.open({
      type: 'error',
      content: 'Неправильный логин или пароль',
    });
  };
  const SuccessMassage = () => {
    messageApi.open({
      type: 'success',
      content: 'Вы авторизованны',
    });
  };

  useEffect(() => {
    setButtonDisable(true);
  }, []);

  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleLoginFinish = async (values: ILoginData) => {
    const res = await loginUser(values);

    if ('error' in res) {
      ErrorMassage();
      form.setFields([
        {
          name: 'password',
          errors: ['Неправильный логин или пароль'],
        },
        {
          name: 'login',
          errors: ['Неправильный логин или пароль'],
        },
      ]);
    } else if ('data' in res) {
      SuccessMassage();
      form.resetFields();
      localStorage.setItem('token', res.data.accessToken);
    }
  };

  return (
    <div className={styles.form__wrap}>
      {contextHolder}
      <Form
        form={form}
        name="login"
        layout="vertical"
        className={styles.form}
        onFinish={handleLoginFinish}
       
      >
        <Form.Item
          name="login"
          rules={[{ required: true, message: 'Введите свой логин' }]}
        >
          <Input
            placeholder="Имя пользователя"
            size="large"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Введите свой пароль' }]}
        >
          <Input.Password
            placeholder="Пароль"
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item shouldUpdate noStyle>
          {() => (
            <Button
              type="primary"
              style={{ width: '100%' }}
              size="large"
              htmlType="submit"
              loading={isLoading}
              disabled={
                !isButtonDisable ||
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Войти
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
