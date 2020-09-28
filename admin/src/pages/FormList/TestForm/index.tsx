import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.scss";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const TestForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];

    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: "Input something!"
              }
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      );
    }

    return children;
  };

  const onFinish = (values: any) => {
    const { validateFields } = form
    validateFields().then(val => {
      console.log(val)
      onSuccess(val)
    }).catch(err => {
      console.log(err)
    })
    console.log(form)
    // console.log("Received values of form: ", form.getFieldValue('Field0'));
  };

  const onSuccess = (val:any) => {
    console.log(val)
  }

  return (
    <div>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
      >
        <Row gutter={24}>{getFields()}</Row>
      </Form>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right"
          }}
        >
          <Button type="primary" onClick={onFinish}>
            Search
          </Button>
          <Button
            style={{
              margin: "0 8px"
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default TestForm