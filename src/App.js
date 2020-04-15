import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact={true} from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' component={Admin} />
                </Switch>
            </BrowserRouter>
        )
    }
}