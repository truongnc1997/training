import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Alert } from "react-bootstrap";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 7 },
};

class Antd2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }
  onFinish(values) {
    console.log("Success:", values);
  }
  onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSumbit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div className="antd2">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          // onFinish={this.onFinish}
          // onFinishFailed={this.onFinishFailed}
          onSubmit={this.handleSumbit}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            onChange={this.handleChange}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            onChange={this.handleChange}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.handleSumbit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Antd2;
