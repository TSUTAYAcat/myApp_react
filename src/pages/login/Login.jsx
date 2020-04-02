import React from 'react'
import './Login.less'

export default class Login extends React.Component {
    render (){
        return <div className="login">
           <div className="head">
               <span className='img'>记：</span>
               <span>日子还是日子一天天得好好过。</span>
           </div>
           <div className="login-content"></div>
        </div>
    }
}