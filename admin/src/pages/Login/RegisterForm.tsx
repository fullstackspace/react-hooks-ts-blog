import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface IProps {
  [propName: string]: any
}

const RegisterForm: React.FC = (props: IProps) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="form">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='username' prefix={<UserOutlined className="site-form-item-icon" />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='password' prefix={<LockOutlined className="site-form-item-icon" />} />
        </Form.Item>

        <Form.Item
          name="rePassword"
          rules={[{ required: true, message: 'Please input your rePassword!' }]}
        >
          <Input.Password placeholder='password' prefix={<LockOutlined className="site-form-item-icon" />} />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterForm