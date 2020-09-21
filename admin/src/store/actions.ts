export const ACTION_SET_TOKEN = 'SET_TOKEN'

export function setToken(token: string) {
  console.log(token)
  return {
    type: ACTION_SET_TOKEN,
    payload: token
  }
}