// 入口js
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import localInfo from './utils/localUtils'
import userInfo from './utils/infoUtils'

// 将本地user信息存入内存中
userInfo.user = localInfo.getUser()

ReactDom.render(<App />, document.getElementById('root')) // 渲染APP