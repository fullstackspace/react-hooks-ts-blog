import React, { useState, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import './index.css'

const layout = {
  labelCol: { span: 6 },
};

const Login: React.FC = (props) => {
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()
  const onFinish = (values: { [key: string]: string }) => {
    const { username, password, Repassword = '' } = values
    if (isLogin) {
      // 发送请求
      if (username === 'admin' && password === '123456') {
        history.push('/index')
      }
    } else {
      setIsLogin(true)
    }
    console.log(isLogin)
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-container'>
      <div className='outer'>
        <header className='title'>
          <h3>{isLogin ? 'Login' : 'Register'}</h3>
        </header>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            className='label-name'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className='label-name'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          {
            !isLogin && (<Form.Item
              label="RePassword"
              name="Repassword"
              className='label-name'
              rules={[{ required: true, message: 'Please input your Repassword!' }]}
            >
              <Input.Password />
            </Form.Item>)
          }


          <div className='footer'>
            {
              isLogin ? (<Button type="primary" htmlType="submit" >
                Submit
              </Button>) : (<Button type="default" htmlType="submit">
                Register
              </Button>)
            }

          </div>
          <span className='register' onClick={() => setIsLogin(!isLogin)} >{isLogin ? 'register' : 'go login'}</span>
        </Form>
      </div>

    </div>
  )
}

export default Login