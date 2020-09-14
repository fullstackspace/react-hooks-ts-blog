interface IRouter {
  title: string,
  key: string,
  path?: string,
  icon?: string,
  child?: []
}

const router: IRouter[] = [
  {
    title: '控制台',
    key: 'controller'
  },
]

export default router