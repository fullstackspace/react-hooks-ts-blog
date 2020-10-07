import { Button, Modal, Space, Table } from 'antd';
import React, { FC } from 'react'
import { useHistory } from 'react-router';
import { ExclamationCircleOutlined } from '@ant-design/icons'

const column = [
  {
    title: '文章标题',
    dataIndex: 'articleTitle',
    key: 'articleTitle',
  },
  {
    title: '文章类型',
    dataIndex: 'articleType',
    key: 'articleType',
  },
  {
    title: '文章内容',
    dataIndex: 'articleContent',
    key: 'articleContent',
  },
  {
    title: '发布时间',
    key: 'releaseTime',
    dataIndex: 'releaseTime',
  },
  {
    title: '更新时间',
    key: 'updateTime',
    dataIndex: 'updateTime',
  },
  {
    title: '当前热度',
    key: 'articleHot',
    dataIndex: 'articleHot',
  },
  {
    title: '浏览数量',
    key: 'viewNumber',
    dataIndex: 'viewNumber',
  }
];

const data = [
  {
    key: '1',
    articleTitle: 'John Brown',
    articleType: 32,
    articleContent: 'New York No. 1 Lake Park',
    releaseTime: ['nice', 'developer'],
    updateTime: ['nice', 'developer'],
    articleHot: ['nice', 'developer'],
    viewNumber: ['nice', 'developer'],
  },
  {
    key: '2',
    articleTitle: 'Jim Green',
    articleType: 42,
    articleContent: 'London No. 1 Lake Park',
    releaseTime: ['loser'],
    updateTime: ['nice', 'developer'],
    articleHot: ['nice', 'developer'],
    viewNumber: ['nice', 'developer'],
  },
  {
    key: '3',
    articleTitle: 'Joe Black',
    articleType: 32,
    articleContent: 'Sidney No. 1 Lake Park',
    releaseTime: ['cool', 'teacher'],
    updateTime: ['nice', 'developer'],
    articleHot: ['nice', 'developer'],
    viewNumber: ['nice', 'developer'],
  },
];

const { confirm } = Modal


const BlogList: FC = () => {
  const history = useHistory()
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: false,
  }
  const actions = {
    title: '操作',
    key: 'action',
    render: (text: string, record: any) => (
      <Space size="middle">
        <Button type="primary" onClick={() => toEdit(record)}>edit</Button>
        <Button danger onClick={() => showConfirm(record)} >Delete</Button>
      </Space>
    ),
  }

  const columns = [...column, actions]

  const toEdit = (value: any) => {
    history.push('/blogedit')
    console.log(history)
  }

  const showConfirm = (value: any) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '<Button onClick={destroyAll}>Click to destroy all</Button>',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={paginationProps} />
    </div>
  )
}

export default BlogList