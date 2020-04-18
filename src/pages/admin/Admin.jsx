import React from 'react'
import userInfo from '../../utils/infoUtils'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';

import LeftNav from '../../components/left-nav/LeftNav'
import Category from '../category/Category'
import Home from '../home/Home'
import Product from '../product/Product'
import Role from '../role/Role'
import User from '../user/User'
import Bar from '../charts/Bar'
import Line from '../charts/Line'
import Pie from '../charts/Pie'
const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends React.Component {

    render() {
        console.log(this)
        if (!(userInfo && userInfo.user && Object.keys(userInfo.user).length > 0)) {
            return <Redirect to="/login/" />
        }
        return <div style={{ height: '100%' }}>
            <Layout style={{ height: '100%' }}>
                <Sider style={{ height: '100%', color: '#fff' }}>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header style={{ backgroundColor: "#fff" }}>Header</Header>
                    <Content>
                        <Switch>
                            <Redirect exact={true} from='/admin' to='/admin/home'></Redirect>
                            <Route path='/admin/home' component={Home}></Route>
                            <Route path='/admin/category' component={Category}></Route>
                            <Route path='/admin/product' component={Product}></Route>
                            <Route path='/admin/role' component={Role}></Route>
                            <Route path='/admin/user' component={User}></Route>
                            <Route path='/admin/charts/bar' component={Bar}></Route>
                            <Route path='/admin/charts/line' component={Line}></Route>
                            <Route path='/admin/charts/pie' component={Pie}></Route>
                            {/* <Redirect  to='/admin/home' /> */}
                        </Switch>
                    </Content>
                    <Footer style={{ backgroundColor: "pink" }}>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    }
}