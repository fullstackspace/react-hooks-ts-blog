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
    icon: 'UserOutlined',
    key: '/firstPages',
  },
  {
    title: 'Dashboard',
    icon: 'UserOutlined',
    key: '/dashboard',
    child: [
      {
        title: '分析页',
        key: '/dashboard/analysis',
        icon: ''
      },
      {
        title: '监空页',
        key: '/dashboard/monitory',
        icon: ''
      },
      {
        title: '工作台',
        key: '/dashboard/work',
        icon: 'UserOutlined',
        // child: [
        //   {
        //     title: '分析页',
        //     key: '/dashboard/analysis',
        //     icon: 'UserOutlined',
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
    icon: 'UserOutlined',
    key: '/formList'
  },
  {
    title: '列表页',
    icon: 'UserOutlined',
    key: '/tableList',
    child: [
      {
        title: '普通表格',
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
    icon: 'UserOutlined',
    key: '/detailForm',
  },
  {
    title: '结果页',
    icon: 'UserOutlined',
    key: '/resultPages'
  },
  {
    title: '异常页',
    icon: 'UserOutlined',
    key: '/unusual'
  },
  {
    title: '个人页',
    icon: 'UserOutlined',
    key: '/personal'
  }
]

export default router