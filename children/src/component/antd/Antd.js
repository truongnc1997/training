import React, { Component } from "react";
import "./Antd.css";
import { DatePicker, Layout } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 7 },
};
class Antd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        {/* <Form {...layout} name="basic" /> */}
        {/* <Input
          name="username"
          placeholder="username"
          onChange={this.handleChange}
          value={this.state.username}
          rules={[{ required: true, message: "Please input your username!" }]}
        /> */}
        <Input
          className="email"
          name="email"
          placeholder="email"
          type="text"
          onChange={this.handleChange}
          rules={[{ required: true, message: "Please input your username!" }]}
          autoFocus
        />

        <br />
        <Input
          className="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={this.handleChange}
        />
        <br />
        <Button onClick={this.handleSubmit} type="primary">
          login
        </Button>
      </div>
    );
  }
}
export default Antd;
