import React from 'react'
import userInfo from '../../utils/infoUtils'
import { Redirect } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu

export default class Admin extends React.Component {

    render() {
        console.log(userInfo)
        if (!(userInfo && userInfo.user && Object.keys(userInfo.user).length > 0)) {
            return <Redirect to="/login/" />
        }
        return <div style={{ height: '100%' }}>
            <Layout style={{ height: '100%' }}>
                <Sider style={{ height: '100%', color: '#fff' }}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        // inlineCollapsed={false}
                    >
                        <Menu.Item key="1">
                            <PieChartOutlined />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <DesktopOutlined />
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <ContainerOutlined />
                            <span>Option 3</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <AppstoreOutlined />
                                    <span>Navigation Two</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ backgroundColor: "#fff" }}>Header</Header>
                    <Content>Content</Content>
                    <Footer style={{ backgroundColor: "pink" }}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    }
}