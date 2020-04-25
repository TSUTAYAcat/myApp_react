import React from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd'
import user from '../../utils/infoUtils'
import localInfo from '../../utils/localUtils'
import './Header.less'
import menuList from '../../config/menu'
import { showDate } from '../../utils/common'
import { getWeather } from '../../service/admin'
class Header extends React.Component {
    state = {
        currTime: '',
        weather: {},
        timer: ''
    }
    componentDidMount() {
        // 实时获取时间
        const timer = setInterval(() => {
            this.setState({
                currTime: showDate(),
            })
        }, 1000)
        this.setState({ timer: timer })
        // 获取天气信息
        this.showWeather()
    }
    componentWillUnmount(){
        // 清除定时器
        clearInterval(this.state.timer)
    }
    // 获取天气
    showWeather = async () => {
        const data = await getWeather('南京')
        console.log(data)
        this.setState({ weather: data || {} })
    }
    // 退出登录
    backToLogin = () => {
        Modal.confirm({
            title: '确定退出?',
            onOk: () => {
                //   console.log('OK');
                user.user = {};
                localInfo.removeUser();
                this.props.history.replace('/login');
            },
        });
    }
    // 获取当前title
    getTitle = (list, path) => {
        let title = ''
        if (list && list.length) {
            for (let value of list) {
                if (value.link === path) {
                    title = value.title
                    break;
                } else if (value.children.length) {
                    title = this.getTitle(value.children, path)
                    if (title) {
                        break
                    }
                }
            }

        }
        return title
    }

    render() {

        const title = this.getTitle(menuList, this.props.location.pathname)
        return <div style={{ height: '100px', flexDirection: 'column' }}>
            <div style={{ height: '50px', borderBottom: '1px solid #000', textAlign: 'right', lineHeight: '50px', padding: '0 20px', }}>  <span>欢迎       {user.user.username}</span><span style={{ cursor: 'pointer' }} onClick={this.backToLogin}> 退出 </span> </div>
            {/* <div style={{ flex: 1, backgroundColor: '#000' }}>1 </div> */}
            <div style={{ height: '50px', textAlign: 'right', lineHeight: '50px', padding: '0 20px', display: 'flex', justifyContent: 'space-between' }}>
                <div className='title' >{title}</div>
                <div>
                    <span style={{ padding: '0 10px' }} >{this.state.currTime}</span>
                    <img alt='' style={{ width: '20px', height: '20px', marginTop: '-3px' }} src={this.state.weather.dayPictureUrl || ''} />
                    <span style={{ padding: '0 10px' }} >{this.state.weather.weather}</span>
                </div>
            </div>
        </div>
    }
}
export default withRouter(Header)