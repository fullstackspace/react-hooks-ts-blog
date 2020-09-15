import { title } from "process"

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
    key: '/firstPages',
  },
  {
    title: 'Dashboard',
    icon: 'GitlabOutlined',
    key: '/dashboard',
    child: [
      {
        title: '分析页',
        key: '/dashboard/analysis',
        icon: ''
      },
      {
        title: '监控',
        key: '/dashboard/monitory',
        icon: ''
      },
      {
        title: '工作台',
        key: '/dashboard/work',
        icon: '',
        // child: [
        //   {
        //     title: '分析页',
        //     key: '/dashboard/analysis',
        //     icon: '',
        //     child: [
        //       {
        //         title: '监空页',
        //         key: '/dashboard/monitory',
        //         icon: ''
        //       }
        //     ]
        //   },
        // ]
      }
    ]
  },
  {
    title: '表单页',
    icon: 'MenuOutlined',
    key: '/formList'
  },
  {
    title: '表格页',
    icon: 'TableOutlined',
    key: '/tableList',
    child: [
      {
        title: '普通表格',
        icon: '',
        key: '/tableList/generalTable'
      },
      {
        title: '可编辑表格',
        key: '/tableList/editTable'
      }
    ]
  },
  {
    title: '详情页',
    icon: 'QrcodeOutlined',
    key: '/detailForm',
  },
  {
    title: '结果页',
    icon: 'DropboxOutlined',
    key: '/resultPages'
  },
  {
    title: '异常页',
    icon: 'StopOutlined',
    key: '/unusual'
  },
  {
    title: '个人页',
    icon: 'UserOutlined',
    key: '/personal'
  }
]

export default router