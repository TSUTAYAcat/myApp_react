import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './Login.less'

export default class Login extends React.Component {
    onFinish = values => {
        console.log(values)
    }
    onFinishFailed = values => {
        alert('你要是没有用户名密码我给你提供一个，看当前页面右下角')
    }
    render() {
        return <div className="login">
            <div className="head">
                <span className='img'>记：</span>
                <span>日子还是日子一天天得好好过。</span>
            </div>
            <div className="login-content">
                <Form
                    className="login-form"
                    initialValues={{ remember: false, username: '', password: '' }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入你的用户名!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="在这里输入你的用户名..." />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入你的密码' }]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="还有你的密码，谢谢！"
                        />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>记住 我</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                             前进
                         </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='tips'>
                <div>总会有办法的，不是吗？</div>
                <div>名子: friend</div>
                <div>密码: fighting</div>
            </div>
        </div>
    }
}
