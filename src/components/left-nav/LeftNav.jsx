import React from 'react'
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import menuList from '../../config/menu'
const { SubMenu } = Menu

export default class LeftNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: this.renderMenu(menuList)
        }
    }
    componentDidMount() {

    }
    renderMenu = (menuList, newMenuList = []) => {
        menuList.forEach(value => {
            console.log(value)
            if (value.children.length) {
                newMenuList.push(
                    <SubMenu
                        key={value.title}
                        title={
                            <span>
                                <MailOutlined />
                                <span>{value.title}</span>
                            </span>
                        }
                    >
                        {this.renderMenu(value.children)}
                    </SubMenu>
                )
            } else {
                newMenuList.push(
                    <Menu.Item key={value.title}>
                        <Link to={value.link}>
                            <PieChartOutlined />
                            <span>{value.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
        return newMenuList
    }

    render() {
        // console.log(this.renderMenu(menuList), 1)
        return <div>
            <Menu
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
            // inlineCollapsed={false}
            >
                {this.state.navList}
                {/* <Menu.Item key="1">
                    <Link to="/admin/home">
                        <PieChartOutlined />
                        <span>Option 1</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/admin/user">
                        <DesktopOutlined />
                        <span>Option 2</span>
                    </Link>
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
                </SubMenu> */}
            </Menu>
        </div>
    }
}