export interface IRouter {
  title: string,
  key: string,
  path?: string,
  icon?: string,
  child?: IRouter[]
}

const router: IRouter[] = [
  {
    title: '首页',
    icon: 'CrownOutlined',
    path: '/firstPages',
    key: '/firstPages',
  },
  {
    title: 'Dashboard',
    icon: 'GitlabOutlined',
    key: '/dashboard',
    child: [
      {
        title: '分析页',
        key: '/analysis',
        path: '/analysis',
        icon: ''
      },
      {
        title: '监控',
        key: '/monitory',
        path: '/monitory',
        icon: ''
      },
      {
        title: '工作台',
        key: '/work',
        icon: '',
        child: [
          {
            title: '日志',
            key: '/workLog',
            path: '/workLog',
            icon: '',
          },
        ]
      }
    ]
  },
  {
    title: '表单页',
    icon: 'MenuOutlined',
    key: '/formList',
    path: '/formList'
  },
  {
    title: '表格页',
    icon: 'TableOutlined',
    key: '/tableList',
    child: [
      {
        title: '普通表格',
        icon: '',
        key: '/generalTable',
        path: '/generalTable'
      },
      {
        title: '可编辑表格',
        icon: '',
        key: '//editTable',
        path: '/editTable'
      }
    ]
  },
  {
    title: '详情页',
    icon: 'QrcodeOutlined',
    key: '/detailForm',
    path: '/detailForm',
  },
  {
    title: '结果页',
    icon: 'DropboxOutlined',
    key: '/resultPages',
    path: '/resultPages'
  },
  {
    title: '异常页',
    icon: 'StopOutlined',
    key: '/unusual',
    path: '/unusual'
  },
  {
    title: '个人页',
    icon: 'UserOutlined',
    key: '/personal',
    path: '/personal'
  }
]

export default router