import React from 'react'
import userInfo from '../../utils/infoUtils'
import { Redirect } from 'react-router-dom'
export default class Admin extends React.Component {

    render() {
        console.log(userInfo)
        if (!(userInfo && userInfo.user && Object.keys(userInfo.user).length>0)) {
            return <Redirect to="/login/" />
        }
        return <div>
            Admin
        </div>
    }
}