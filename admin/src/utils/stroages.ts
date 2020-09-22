// Token
interface IStroage {
  name: string,
  value?: string
}
// 设置Token
export const setToken = (keyValue: IStroage) => {
  const { name, value } = keyValue
  localStorage.setItem(name, value as string)
}
// 获取Token
export const getToken = (keyValue: IStroage) => {
  const { name } = keyValue
  return localStorage.getItem(name)
}
// 删除Token
export const removeToken = (keyValue: IStroage) => {
  const { name } = keyValue
  return localStorage.removeItem(name)
}