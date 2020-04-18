import React from 'react'
import {
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import menuList from '../../config/menu'
const { SubMenu } = Menu

class LeftNav extends React.Component {
    componentWillMount() {
        this.navList = this.renderMenu(menuList)
    }
    renderMenu = (menuList, newMenuList = []) => {
        const pathname = this.props.location.pathname
        menuList.forEach(value => {
            if (value.children.length) {
                const currNav = value.children.find(e => e.link === pathname)
                if (currNav) {
                    this.openKeys = value.title
                }
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
                    <Menu.Item key={value.link}>
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
        return <div>
            <Menu
                selectedKeys={[this.props.location.pathname]}
                defaultOpenKeys={[this.openKeys]}
                mode="inline"
                theme="dark"
            // inlineCollapsed={false}
            >
                {this.navList}
            </Menu>
        </div>
    }
}

export default withRouter(LeftNav)