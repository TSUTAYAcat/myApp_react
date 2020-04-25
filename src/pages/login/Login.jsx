import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import userInfo from '../../utils/infoUtils'
import localInfo from '../../utils/localUtils'
import { Redirect } from 'react-router-dom'
import md5 from 'blueimp-md5'
import './Login.less';
import { login, regist } from '../../service/login'

export default class Login extends React.Component {
    onFinish = async values => {
        console.log(values)
        if (values.isRegist) {
            let { username, password } = values
            password = md5(password)
            let result = await regist({ username, password })
            console.log(result)
            if (result.data && result.data.success) {
                console.log(result)
            }
        } else {
            let { username, password } = values
            password = md5(password)
            let result = await login({ username, password })
            if (result.data && result.data.data && result.data.data.loginSuccess) {
                console.log(this.props.history)
                userInfo.user = result.data.data
                localInfo.saveUser(result.data.data)
                this.props.history.replace('/admin')
            }
        }

    }
    onFinishFailed = values => {
        alert('你要是没有用户名密码我给你提供一个，看当前页面右下角')
    }

    render() {
        if (userInfo && userInfo.user && Object.keys(userInfo.user).length > 0) {
            return <Redirect to="/admin" />
        }
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
                        rules={[
                            { required: true, message: '请输入你的用户名!' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名得要英文数字下划线!' },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="在这里输入你的用户名..." />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入你的密码' },
                        { min: 4, message: '你最好输入四位用户名!' },
                        { max: 22, message: '你叫那么长的名字干嘛!' },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="还有你的密码，谢谢！"
                        />
                    </Form.Item>
                    <Form.Item name="isRegist" valuePropName="checked">
                        <Checkbox >注册？</Checkbox>
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
