import React, { Component } from "react"
import { Form, Input, Button,Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css"
import 'antd/dist/antd.less'
export default class Login extends Component {
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <div className="login">
                <header>
                    <h1>图书管理系统</h1>
                </header>
                <section>
                    <h1>用户登录</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },{
                                    max:14,
                                    message:"用户名长度不能超过14位"
                                },{
                                    min:6,
                                    message:"用户名长度不能少于6位"
                                },{
                                    whitespace:true,
                                    message:"不能包含空格"
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },{
                                    max:14,
                                    message:"用户名长度不能超过14位"
                                },{
                                    min:6,
                                    message:"用户名长度不能少于6位"
                                },{
                                    whitespace:true,
                                    message:"不能包含空格"
                                }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
        </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
        </Button>
        Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}