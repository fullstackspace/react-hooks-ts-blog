import React, { Component } from 'react';
// 登录
import LoginForm from './LoginForm';
// 注册
import RegisterForm from './RegisterForm';
import './index.scss'

class Login extends Component {
  constructor(prop: any) {
    super(prop)
  }
  state = {
    isLogin: true
  }

  toogle = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render() {
    const { isLogin } = this.state
    return (
      <div className="login">
        <div className="login-form">
          <div className="login-title">
            <p>React Admin</p>
          </div>
          {
            isLogin ? <LoginForm /> : <RegisterForm />
          }
          <div className="login-footer">
            <p onClick={this.toogle}>{isLogin ? '去注册' : '去登录'}</p>
            <p>第三方登录</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Login