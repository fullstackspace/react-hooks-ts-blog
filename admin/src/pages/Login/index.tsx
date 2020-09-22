import React, { FC, useState } from 'react';
// 登录
import LoginForm from './LoginForm';
// 注册
import RegisterForm from './RegisterForm';
import './index.scss'
import { login, register } from '@/service/api';
import { setToken, getToken } from '@/utils/stroages';
import { message } from 'antd';
import { useHistory } from 'react-router';

// import '@/assets/outer.scss'

interface ILogin {
  username: string,
  password: string
}

interface IProps {
  [propName: string]: any
}

interface IUserInfo {
  msg?: string,
  token?: any
}
const Login: FC<IProps> = (props) => {
  const [isLogin, setIsLogin] = useState(true)
  const history = useHistory()
  const toogle = () => {
    setIsLogin(!isLogin)
  }
  const doLogin = async (value: ILogin) => {
    const { msg, token } = await login(value) as IUserInfo
    if (!token) {
      message.warning(msg)
      return
    }
    message.success(msg)
    setToken({ name: 'token', value: JSON.stringify(token) })
    history.push('/')
  }
  console.log(getToken({ name: 'token' }))
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-title">
          <p>React Admin</p>
        </div>
        {
          isLogin ? <LoginForm doLogin={doLogin} /> : <RegisterForm />
        }
        <div className="login-footer">
          <p onClick={toogle}>{isLogin ? '去注册' : '去登录'}</p>
          <p>第三方登录</p>
        </div>
      </div>
    </div>
  )
}
// class Login extends Component {
//   constructor(prop: any) {
//     super(prop)
//   }
//   state = {
//     isLogin: true
//   }

//   toogle = () => {
//     this.setState({
//       isLogin: !this.state.isLogin
//     })
//   }

//   doLogin = async (value: ILogin) => {
//     const { msg, token } = await login(value) as IUserInfo
//     message.warning(msg)
//     if (!token) {
//       return
//     }
//     setToken({ name: 'token', value: JSON.stringify(token) })
//   }
//   render() {
//     const { isLogin } = this.state
//     return (
//       <div className="login">
//         <div className="login-form">
//           <div className="login-title">
//             <p>React Admin</p>
//           </div>
//           {
//             isLogin ? <LoginForm doLogin={this.doLogin} /> : <RegisterForm />
//           }
//           <div className="login-footer">
//             <p onClick={this.toogle}>{isLogin ? '去注册' : '去登录'}</p>
//             <p>第三方登录</p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
export default Login