interface IStroage {
  name: string,
  value?: string
}

export const setToken = (keyValue: IStroage) => {
  const { name, value } = keyValue
  localStorage.setItem(name, value as string)
}
export const getToken = (keyValue: IStroage) => {
  const { name } = keyValue
  return localStorage.getItem(name)
}