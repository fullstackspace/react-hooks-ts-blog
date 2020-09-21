import { post, get, downfile } from './http';
// eg:
export const getTableList = (p: object) => get('urlxxxx', p)
export const postFormLit = (p: object) => post('urlxxxx', p)
export const downFile = (p: object) => downfile('urlxxxx', p)
// 注册
export const register = (p: object) => post('/auth/register', p)
// 登录
export const login = (p: object) => post('/auth/login', p)