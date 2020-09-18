import { post, get, downfile } from './http';
// eg:
export const getTableList = (p: object) => get('urlxxxx', p)
export const postFormLit = (p: object) => post('urlxxxx', p)
export const downFile = (p: object) => downfile('urlxxxx', p)