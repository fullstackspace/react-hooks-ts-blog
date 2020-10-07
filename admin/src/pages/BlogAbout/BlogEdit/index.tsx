import { Row, Col, Input, Select, Form, DatePicker, InputNumber, Button } from 'antd'
import React, { FC } from 'react'
import moment from 'moment'
import './index.scss'
const { Option } = Select
const { TextArea } = Input
const BlogEdit: FC = () => {

  const onFinish = (values: any) => {
    console.log(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form className="blog-container" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Row gutter={32}>
        <Col span={18} className="left">
          <div className="blog article-title">
            <Form.Item
              label="文章标题"
              name="articleTitle"
              rules={[{ required: true, message: 'Please input your articleTitle!' }]}>
              <Input placeholder="请输入文章标题" />
            </Form.Item>
            <Form.Item
              label="文章类型"
              name="articleType"
              rules={[{ required: true, message: 'Please input your articleType!' }]}>
              <Select placeholder="请选择文章类型">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="blog article-content">
            <Form.Item
              label="文章内容"
              name="articleContent"
              rules={[{ required: true, message: 'Please input your articleContent!' }]}>
              <TextArea placeholder="请输入文章内容" />
            </Form.Item>
            <Form.Item>
              <TextArea disabled={true} />
            </Form.Item>
          </div>
        </Col>
        <Col span={6} className="right">
          <Form.Item
            label="发布时间"
            name="releaseTime"
            rules={[{ required: true, message: 'Please input your releaseTime!' }]}>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
          </Form.Item>
          <Form.Item
            label="更新时间"
            name="updateTime"
            rules={[{ required: true, message: 'Please input your updateTime!' }]}>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
          </Form.Item>
          <Form.Item
            label="当前热度"
            name="articleHot"
            rules={[{ required: true, message: 'Please input your updateTime!' }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="浏览数量"
            name="viewNumber"
            rules={[{ required: true, message: 'Please input your viewNumber!' }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item className="action" >
            <Button type="primary" htmlType="submit" > 提交 </Button>
            <Button type="default"> 取消 </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default BlogEdit