import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
interface IProps {
  [propName: string]: any
}

const LoginForm: React.FC<IProps> = (props) => {
  const { doLogin } = props
  const history = useHistory()
  const onFinish = async (values: IProps) => {
    const username = values.username.trim()
    const password = values.password.trim()
    doLogin({ username, password })
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: IProps) => {
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

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm